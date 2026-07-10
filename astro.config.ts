import path from 'path';
import fs from 'node:fs';
import { fileURLToPath } from 'url';

import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import preact from '@astrojs/preact';
import icon from 'astro-icon';
import slugify from 'limax';
import compress from 'astro-compress';
import remarkLinkCard from 'remark-link-card-plus';

import astrowind from './vendor/integration';

import {
  readingTimeRemarkPlugin,
  responsiveTablesRehypePlugin,
  lazyImagesRehypePlugin,
  normalizeInternalLinksRehypePlugin,
} from './src/utils/frontmatter';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Build slug → lastmod map and tag → published-post count map from post frontmatter at config time
function scanPostFrontmatter(): { lastmodMap: Map<string, Date>; tagCountMap: Map<string, number> } {
  const lastmodMap = new Map<string, Date>();
  const tagCountMap = new Map<string, number>();
  const postsDir = path.join(__dirname, 'src/data/post');
  if (!fs.existsSync(postsDir)) return { lastmodMap, tagCountMap };

  const walk = (dir: string) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(full);
      } else if (entry.name === 'index.md' || entry.name === 'index.mdx') {
        // Tolerate BOM and CRLF line endings
        const content = fs.readFileSync(full, 'utf-8').replace(/^﻿/, '');
        const fmMatch = content.match(/^--- *\r?\n([\s\S]*?)\r?\n--- */);
        if (!fmMatch) continue;
        const fm = fmMatch[1];
        const slug = path.basename(path.dirname(full));
        const dateStr = fm.match(/^lastmod:\s*(.+)$/m)?.[1]?.trim() ?? fm.match(/^publishDate:\s*(.+)$/m)?.[1]?.trim();
        if (slug && dateStr) {
          try {
            lastmodMap.set(slug, new Date(dateStr));
          } catch {
            // ignore invalid dates
          }
        }

        // Drafts generate no pages, so they must not count toward tag totals
        if (/^draft:\s*true/m.test(fm)) continue;
        let tags: string[] = [];
        const inline = fm.match(/^tags:\s*\[([^\]]*)\]/m);
        if (inline) {
          tags = inline[1].split(',');
        } else {
          const block = fm.match(/^tags:\s*\r?\n((?:\s+-\s+.*\r?\n?)+)/m);
          if (block) tags = block[1].split(/\r?\n/).map((l) => l.replace(/^\s+-\s+/, ''));
        }
        for (const raw of tags) {
          const tag = raw.trim().replace(/^['"]|['"]$/g, '');
          if (!tag) continue;
          // Same slugification as src/utils/permalinks.ts cleanSlug
          const tagSlug = slugify(tag);
          tagCountMap.set(tagSlug, (tagCountMap.get(tagSlug) ?? 0) + 1);
        }
      }
    }
  };
  walk(postsDir);
  return { lastmodMap, tagCountMap };
}

const { lastmodMap, tagCountMap } = scanPostFrontmatter();

// Pages that carry noindex (template leftovers, thin tag pages) must stay out of the sitemap
const SITEMAP_EXCLUDED_PREFIXES = ['/homes/', '/landing/', '/pricing/', '/services/', '/try/'];
const MIN_TAG_POSTS_FOR_SITEMAP = 10;

function sitemapFilter(page: string): boolean {
  const pathname = new URL(page).pathname;
  if (SITEMAP_EXCLUDED_PREFIXES.some((prefix) => pathname.startsWith(prefix))) return false;
  const tagMatch = pathname.match(/^\/tag\/([^/]+)\//);
  if (tagMatch) {
    return (tagCountMap.get(tagMatch[1]) ?? 0) >= MIN_TAG_POSTS_FOR_SITEMAP;
  }
  return true;
}

export default defineConfig({
  output: 'static',
  site: 'https://syllabushack.com',

  redirects: {
    // CBT系統合 (2026-06-10): cbt-impact-advanced-exams の固有情報をマージ
    '/cbt-impact-advanced-exams/': '/cbt-2026-syllabus-complete-guide/',
    // グループD: 直前対策統合 (2026-05-30)
    '/final-checkpoint-100-plus/': '/itp-10-days-panic-hack/',
    // グループB: NotebookLM統合 (2026-05-30) — 旧redirect先も新ガイドへ転送
    '/notebooklm-ip-study-hack/': '/notebooklm-features-guide/',
    '/notebooklm-it-passport-drill/': '/notebooklm-features-guide/',
    '/notebooklm-flashcard/': '/notebooklm-features-guide/',
    '/notebooklm-anystudy/': '/notebooklm-features-guide/',
    '/notebooklm-podcast/': '/notebooklm-features-guide/',
    '/notebooklm-quiz/': '/notebooklm-features-guide/',
    '/notebooklm-movie/': '/notebooklm-features-guide/',
    '/notebooklm-mindmap/': '/notebooklm-features-guide/',
    '/notebooklm-syllabus-study-method/': '/notebooklm-ai-workflow-guide/',
    '/notebooklm-100-day-hack/': '/notebooklm-ai-workflow-guide/',
    '/notebooklm-100days-challenge-hack/': '/notebooklm-ai-workflow-guide/',
    // Gemini統合 (2026-06-03)
    '/gemini-prompt-collection/': '/gemini-cert-complete/',
    '/gemini-explanation-template/': '/gemini-cert-complete/',
    '/gemini-memory-palace-hack/': '/gemini-cert-complete/',
    // グループC: 氏名変更統合 (2026-05-30)
    '/itp-receipt-name-change-hack/': '/itp-name-change-marriage-hack/',
    // グループA: スマホ学習統合 (2026-05-30)
    '/itp-smartphone-only-hack/': '/smartphone-study-guide/',
    '/gap-time-apps/': '/smartphone-study-guide/',
    // カテゴリ整理 (2026-05-31): glossary → theory, strategy → theory
    '/category/glossary/': '/category/theory/',
    '/category/glossary/2/': '/category/theory/',
    '/category/glossary/3/': '/category/theory/',
    '/category/glossary/4/': '/category/theory/',
    '/category/glossary/5/': '/category/theory/',
    '/category/strategy/': '/category/theory/',
    '/category/strategy/2/': '/category/theory/',
  },
  // Explicit so @astrojs/sitemap and prerender see canonical trailing URLs even if integrations order changes
  trailingSlash: 'always',

  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    preact({ compat: true }),
    sitemap({
      filter: sitemapFilter,
      serialize(item) {
        // Extract slug from URL (last path segment, strip trailing slash)
        const slug = item.url.replace(/\/$/, '').split('/').pop() ?? '';

        // lastmod from frontmatter
        const lastmod = lastmodMap.get(slug);
        if (lastmod) {
          item.lastmod = lastmod.toISOString();
        }

        // priority by slug pattern
        if (slug.endsWith('-hub')) {
          // Hub pages: highest priority, weekly update
          item.priority = 1.0;
          item.changefreq = 'weekly';
        } else if (
          slug.endsWith('-complete') ||
          slug.endsWith('-guide') ||
          slug.endsWith('-roadmap') ||
          slug.endsWith('-workflow-guide')
        ) {
          // Consolidated complete guides: high priority
          item.priority = 0.8;
          item.changefreq = 'monthly';
        } else {
          // Regular posts
          item.priority = 0.5;
          item.changefreq = 'monthly';
        }

        return item;
      },
    }),
    mdx(),
    icon({
      include: {
        tabler: ['*'],
        'flat-color-icons': [
          'template',
          'gallery',
          'approval',
          'document',
          'advertising',
          'currency-exchange',
          'voice-presentation',
          'business-contact',
          'database',
        ],
      },
    }),

    compress({
      CSS: true,
      HTML: {
        'html-minifier-terser': {
          removeAttributeQuotes: false,
        },
      },
      Image: false,
      JavaScript: true,
      SVG: false,
      Logger: 1,
    }),

    astrowind({
      config: './src/config.yaml',
    }),
  ],

  image: {
    domains: ['cdn.pixabay.com', 'images.unsplash.com', 'plus.unsplash.com'],
  },

  markdown: {
    remarkPlugins: [
      readingTimeRemarkPlugin,
      [
        remarkLinkCard,
        {
          cache: true,
          shortenUrl: true,
          thumbnailPosition: 'right',
        },
      ],
    ],
    rehypePlugins: [responsiveTablesRehypePlugin, lazyImagesRehypePlugin, normalizeInternalLinksRehypePlugin],
  },

  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },
});

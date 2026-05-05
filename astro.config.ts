import path from 'path';
import fs from 'node:fs';
import { fileURLToPath } from 'url';

import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import preact from '@astrojs/preact';
import icon from 'astro-icon';
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

// Build slug → lastmod map from post frontmatter at config time
function buildLastmodMap(): Map<string, Date> {
  const map = new Map<string, Date>();
  const postsDir = path.join(__dirname, 'src/data/post');
  if (!fs.existsSync(postsDir)) return map;

  const walk = (dir: string) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(full);
      } else if (entry.name === 'index.md' || entry.name === 'index.mdx') {
        const content = fs.readFileSync(full, 'utf-8');
        const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
        if (!fmMatch) continue;
        const fm = fmMatch[1];
        const slug = path.basename(path.dirname(full));
        const dateStr = fm.match(/^lastmod:\s*(.+)$/m)?.[1]?.trim() ?? fm.match(/^publishDate:\s*(.+)$/m)?.[1]?.trim();
        if (slug && dateStr) {
          try {
            map.set(slug, new Date(dateStr));
          } catch {
            // ignore invalid dates
          }
        }
      }
    }
  };
  walk(postsDir);
  return map;
}

const lastmodMap = buildLastmodMap();

export default defineConfig({
  output: 'static',
  site: 'https://syllabushack.com',
  // Explicit so @astrojs/sitemap and prerender see canonical trailing URLs even if integrations order changes
  trailingSlash: 'always',

  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    preact({ compat: true }),
    sitemap({
      serialize(item) {
        // Extract slug from URL (last path segment, strip trailing slash)
        const slug = item.url.replace(/\/$/, '').split('/').pop() ?? '';
        const lastmod = lastmodMap.get(slug);
        if (lastmod) {
          item.lastmod = lastmod.toISOString();
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

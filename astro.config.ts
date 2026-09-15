import path from 'path';
import fs from 'node:fs';
import { fileURLToPath } from 'url';

import { defineConfig } from 'astro/config';

import sitemap, { ChangeFreqEnum } from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import preact from '@astrojs/preact';
import icon from 'astro-icon';
import slugify from 'limax';
import compress from 'astro-compress';
import remarkLinkCard from 'remark-link-card-plus';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

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
    // 統合リダイレクトの修正 (2026-07-11, w28-site-verifi T3追補):
    // Googleにインデックスされている旧URLは /method/ プレフィックス付きだが、従来の定義は
    // ソース・ターゲットともプレフィックス欠落で、実URLは404・生成ページの転送先も404だった。
    // プレフィックスなしキーも過去の生成ページが参照されている可能性があるため残す（ターゲットのみ修正）。
    // CBT系統合 (2026-06-10): cbt-impact-advanced-exams の固有情報をマージ
    '/cbt-impact-advanced-exams/': '/method/cbt-2026-syllabus-complete-guide/',
    '/method/cbt-impact-advanced-exams/': '/method/cbt-2026-syllabus-complete-guide/',
    '/trend/cbt-impact-advanced-exams/': '/method/cbt-2026-syllabus-complete-guide/',
    // グループD: 直前対策統合 (2026-05-30)
    '/final-checkpoint-100-plus/': '/method/itp-10-days-panic-hack/',
    '/method/final-checkpoint-100-plus/': '/method/itp-10-days-panic-hack/',
    // グループB: NotebookLM統合 (2026-05-30) — 旧redirect先も新ガイドへ転送
    '/notebooklm-ip-study-hack/': '/method/notebooklm-features-guide/',
    '/method/notebooklm-ip-study-hack/': '/method/notebooklm-features-guide/',
    '/notebooklm-it-passport-drill/': '/method/notebooklm-features-guide/',
    '/method/notebooklm-it-passport-drill/': '/method/notebooklm-features-guide/',
    '/notebooklm-flashcard/': '/method/notebooklm-features-guide/',
    '/method/notebooklm-flashcard/': '/method/notebooklm-features-guide/',
    '/notebooklm-anystudy/': '/method/notebooklm-features-guide/',
    '/method/notebooklm-anystudy/': '/method/notebooklm-features-guide/',
    '/notebooklm-podcast/': '/method/notebooklm-features-guide/',
    '/method/notebooklm-podcast/': '/method/notebooklm-features-guide/',
    '/notebooklm-quiz/': '/method/notebooklm-features-guide/',
    '/method/notebooklm-quiz/': '/method/notebooklm-features-guide/',
    '/notebooklm-movie/': '/method/notebooklm-features-guide/',
    '/method/notebooklm-movie/': '/method/notebooklm-features-guide/',
    '/notebooklm-mindmap/': '/method/notebooklm-features-guide/',
    '/method/notebooklm-mindmap/': '/method/notebooklm-features-guide/',
    '/notebooklm-syllabus-study-method/': '/method/notebooklm-ai-workflow-guide/',
    '/method/notebooklm-syllabus-study-method/': '/method/notebooklm-ai-workflow-guide/',
    '/notebooklm-100-day-hack/': '/method/notebooklm-ai-workflow-guide/',
    '/method/notebooklm-100-day-hack/': '/method/notebooklm-ai-workflow-guide/',
    '/notebooklm-100days-challenge-hack/': '/method/notebooklm-ai-workflow-guide/',
    '/method/notebooklm-100days-challenge-hack/': '/method/notebooklm-ai-workflow-guide/',
    // Gemini統合 (2026-06-03)
    '/gemini-prompt-collection/': '/method/gemini-cert-complete/',
    '/method/gemini-prompt-collection/': '/method/gemini-cert-complete/',
    '/gemini-explanation-template/': '/method/gemini-cert-complete/',
    '/method/gemini-explanation-template/': '/method/gemini-cert-complete/',
    '/gemini-memory-palace-hack/': '/method/gemini-cert-complete/',
    '/method/gemini-memory-palace-hack/': '/method/gemini-cert-complete/',
    // グループC: 氏名変更統合 (2026-05-30)
    '/itp-receipt-name-change-hack/': '/method/itp-name-change-marriage-hack/',
    '/method/itp-receipt-name-change-hack/': '/method/itp-name-change-marriage-hack/',
    // グループA: スマホ学習統合 (2026-05-30)
    '/itp-smartphone-only-hack/': '/method/smartphone-study-guide/',
    '/method/itp-smartphone-only-hack/': '/method/smartphone-study-guide/',
    '/gap-time-apps/': '/method/smartphone-study-guide/',
    '/method/gap-time-apps/': '/method/smartphone-study-guide/',
    // カテゴリ整理 (2026-05-31): glossary → theory, strategy → theory
    '/category/glossary/': '/category/theory/',
    '/category/glossary/2/': '/category/theory/',
    '/category/glossary/3/': '/category/theory/',
    '/category/glossary/4/': '/category/theory/',
    '/category/glossary/5/': '/category/theory/',
    '/category/strategy/': '/category/theory/',
    '/category/strategy/2/': '/category/theory/',
    // term/strategy → theory 移行 (2026-06-18): netlify.toml の [[redirects]] は本番(nginx)で機能していない。
    // GSC累積エクスポート（2026-07-11 ページ.csv）で表示実績のある旧URLを全量移植 (w28-site-verifi T3追補)
    '/trend/prompt-engineering-basics/': '/theory/prompt-engineering-basics/',
    '/term/prompt-engineering-basics/': '/theory/prompt-engineering-basics/',
    '/term/sampling-methods-data/': '/theory/sampling-methods-data/',
    '/term/digital-divide-basics/': '/theory/digital-divide-basics/',
    '/term/standard-deviation-variance/': '/theory/standard-deviation-variance/',
    '/term/labor-dispatch-act-ses/': '/theory/labor-dispatch-act-ses/',
    '/term/mean-median-mode-stats/': '/theory/mean-median-mode-stats/',
    '/term/subcontract-act-it-dev/': '/theory/subcontract-act-it-dev/',
    '/term/profit-and-loss-statement-pl/': '/theory/profit-and-loss-statement-pl/',
    '/term/labor-standards-act-36-agreement/': '/theory/labor-standards-act-36-agreement/',
    '/term/cpu-memory-functions/': '/theory/cpu-memory-functions/',
    '/term/sets-logical-operations/': '/theory/sets-logical-operations/',
    '/term/text-mining-nlp/': '/theory/text-mining-nlp/',
    '/strategy/quality-control-abc-fishbone-scatter/': '/theory/quality-control-abc-fishbone-scatter/',
    '/strategy/system-development-contracts-ses-outsourcing-risk/': '/theory/system-development-contracts-ses-outsourcing-risk/',
    '/strategy/data-profitability-dwh-mining-regression/': '/theory/data-profitability-dwh-mining-regression/',
    '/strategy/business-math-statistics-average-variance-bayes/': '/theory/business-math-statistics-average-variance-bayes/',
    '/strategy/cloud-service-selection-saas-paas-iaas/': '/theory/cloud-service-selection-saas-paas-iaas/',
    // IPA 2026年CBT記事クラスタ統廃合 (2026-09-08, article-consolidation/ipa-cbt-2026-cluster-w36.md):
    // 独自価値の薄い6本をハブ記事へ統合。日程の詳細は ipa-2026-cbt-schedule-guide へ
    '/trend/ipa-2026-cbt-confirmed-schedule/': '/method/cbt-2026-syllabus-complete-guide/',
    '/trend/applied-advanced-exam-cbt-transition-2026/': '/method/cbt-2026-syllabus-complete-guide/',
    '/trend/ap-2026-spring-postponed/': '/trend/ipa-2026-cbt-schedule-guide/',
    '/trend/2026-cbt-transition-advanced-exam/': '/method/cbt-2026-syllabus-complete-guide/',
    '/trend/2026-cbt-ai-syllabus-strategy/': '/method/cbt-2026-syllabus-complete-guide/',
    '/trend/ipa-2026-cbt-strategy-ai/': '/method/cbt-2026-syllabus-complete-guide/',
    // theoryジャンル別まとめ記事化 (2026-09-15, TODO.md §3): 1KW=1記事で分散していた
    // プロジェクト・サービスマネジメント系5本を project-service-management-overview へ統合
    '/theory/work-breakdown-structure/': '/theory/project-service-management-overview/',
    '/theory/gantt-chart/': '/theory/project-service-management-overview/',
    '/theory/critical-path/': '/theory/project-service-management-overview/',
    '/theory/sla-slo-service-quality/': '/theory/project-service-management-overview/',
    '/theory/ap-project-planning/': '/theory/project-service-management-overview/',
    // theoryジャンル別まとめ記事化 第②弾 (2026-09-15): UI/UX/アクセシビリティ系3本を統合
    '/theory/ui-ux-design-diff/': '/theory/ui-ux-accessibility-universal-design/',
    '/theory/accessibility-usability-ui/': '/theory/ui-ux-accessibility-universal-design/',
    '/theory/uiux-accessibility-user-centric-design/': '/theory/ui-ux-accessibility-universal-design/',
    // theoryジャンル別まとめ記事化 第③弾 (2026-09-15): QC七つ道具系3本を統合
    '/theory/abc-analysis-pareto-chart/': '/theory/qc-seven-tools-abc-fishbone-scatter/',
    '/theory/characteristic-diagram-fishbone/': '/theory/qc-seven-tools-abc-fishbone-scatter/',
    '/theory/quality-control-abc-fishbone-scatter/': '/theory/qc-seven-tools-abc-fishbone-scatter/',
    // theoryジャンル別まとめ記事化 第④弾 (2026-09-15): 統計基礎系6本を統合
    '/theory/mean-median-mode-stats/': '/theory/statistics-mean-variance-probability-sampling/',
    '/theory/standard-deviation-variance/': '/theory/statistics-mean-variance-probability-sampling/',
    '/theory/probability-bayes-basics/': '/theory/statistics-mean-variance-probability-sampling/',
    '/theory/bias-and-precision-data/': '/theory/statistics-mean-variance-probability-sampling/',
    '/theory/business-math-statistics-average-variance-bayes/': '/theory/statistics-mean-variance-probability-sampling/',
    '/theory/sampling-methods-data/': '/theory/statistics-mean-variance-probability-sampling/',
    // theoryジャンル別まとめ記事化 第⑤弾 (2026-09-15): データ活用基盤系4本を統合
    '/theory/data-warehouse-basics/': '/theory/data-warehouse-mining-regression-basics/',
    '/theory/data-mining-kdd/': '/theory/data-warehouse-mining-regression-basics/',
    '/theory/regression-analysis-data/': '/theory/data-warehouse-mining-regression-basics/',
    '/theory/data-profitability-dwh-mining-regression/': '/theory/data-warehouse-mining-regression-basics/',
    // theoryジャンル別まとめ記事化 第⑥弾 (2026-09-15): 財務諸表系6本を統合
    '/theory/profit-and-loss-statement-pl/': '/theory/corporate-finance-pl-bs-cf-roi-basics/',
    '/theory/balance-sheet-bs/': '/theory/corporate-finance-pl-bs-cf-roi-basics/',
    '/theory/cash-flow-statement-cf/': '/theory/corporate-finance-pl-bs-cf-roi-basics/',
    '/theory/financial-statements-synergy-bs-pl-cf/': '/theory/corporate-finance-pl-bs-cf-roi-basics/',
    '/theory/break-even-point/': '/theory/corporate-finance-pl-bs-cf-roi-basics/',
    '/theory/return-on-investment/': '/theory/corporate-finance-pl-bs-cf-roi-basics/',
    // theoryジャンル別まとめ記事化 第⑦弾 (2026-09-15): 法務系6本を統合
    '/theory/intellectual-property-rights/': '/theory/it-legal-basics-ip-subcontract-contracts/',
    '/theory/unfair-competition-prevention-act/': '/theory/it-legal-basics-ip-subcontract-contracts/',
    '/theory/ai-intellectual-property-copyright-trade-secret/': '/theory/it-legal-basics-ip-subcontract-contracts/',
    '/theory/it-legal-subcontract-copyright-labor/': '/theory/it-legal-basics-ip-subcontract-contracts/',
    '/theory/subcontract-act-it-dev/': '/theory/it-legal-basics-ip-subcontract-contracts/',
    '/theory/system-development-contracts-ses-outsourcing-risk/': '/theory/it-legal-basics-ip-subcontract-contracts/',
    // theoryジャンル別まとめ記事化 第⑧弾 (2026-09-15): BPR/BPM系3本を統合
    '/theory/bpr-process-reengineering/': '/theory/bpr-bpm-business-process-improvement-basics/',
    '/theory/bpm-process-management/': '/theory/bpr-bpm-business-process-improvement-basics/',
    '/theory/business-process-improvement-bpr-bpm-saas/': '/theory/bpr-bpm-business-process-improvement-basics/',
    // theoryジャンル別まとめ記事化 第⑨弾 (2026-09-15): クラウド(SaaS/PaaS/IaaS)系2本を統合
    '/theory/cloud-service-selection-saas-paas-iaas/': '/theory/cloud-saas-paas-iaas-basics/',
    '/theory/saas-paas-iaas-cloud/': '/theory/cloud-saas-paas-iaas-basics/',
    // theoryジャンル別まとめ記事化 第⑩弾 (2026-09-15, SGギャップ分析A): ネットワーク・DB系8本を統合
    '/theory/tcp-ip-protocol-suite/': '/theory/network-database-fundamentals/',
    '/theory/osi-reference-model/': '/theory/network-database-fundamentals/',
    '/theory/dns-domain-name-system/': '/theory/network-database-fundamentals/',
    '/theory/http-https-security/': '/theory/network-database-fundamentals/',
    '/theory/cookie-privacy-web/': '/theory/network-database-fundamentals/',
    '/theory/database-normalization/': '/theory/network-database-fundamentals/',
    '/theory/exclusive-control/': '/theory/network-database-fundamentals/',
    '/theory/transaction-acid/': '/theory/network-database-fundamentals/',
    // theoryジャンル別まとめ記事化 第⑪弾 (2026-09-15, SGギャップ分析B): セキュリティ対策・暗号認証系6本を統合
    '/theory/common-key-cryptography/': '/theory/security-controls-crypto-incident-basics/',
    '/theory/public-key-cryptography/': '/theory/security-controls-crypto-incident-basics/',
    '/theory/supply-chain-security-vulnerability-management-incident-response/': '/theory/security-controls-crypto-incident-basics/',
    '/theory/byod-shadow-it-security/': '/theory/security-controls-crypto-incident-basics/',
    '/theory/remote-work-security-byod-vpn/': '/theory/security-controls-crypto-incident-basics/',
    '/theory/backup-methods/': '/theory/security-controls-crypto-incident-basics/',
    // theoryジャンル別まとめ記事化 要検討3本の処理 (2026-09-15)
    '/theory/telework-workation-style/': '/theory/security-controls-crypto-incident-basics/',
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
        const pathname = new URL(item.url).pathname;

        // lastmod from frontmatter
        const lastmod = lastmodMap.get(slug);
        if (lastmod) {
          item.lastmod = lastmod.toISOString();
        }

        // priority by slug pattern
        const coursePathMatch = pathname.match(/^\/course\/([^/]+)\/?([^/]*)\/?$/);
        if (coursePathMatch) {
          if (pathname === '/course/') {
            item.priority = 0.6;
            item.changefreq = ChangeFreqEnum.MONTHLY;
          } else if (!coursePathMatch[2]) {
            // Course TOP (/course/{exam}/): hub-equivalent
            item.priority = 1.0;
            item.changefreq = ChangeFreqEnum.WEEKLY;
          } else {
            // Chapter pages: guide-equivalent
            item.priority = 0.8;
            item.changefreq = ChangeFreqEnum.MONTHLY;
          }
        } else if (slug.endsWith('-hub')) {
          // Hub pages: highest priority, weekly update
          item.priority = 1.0;
          item.changefreq = ChangeFreqEnum.WEEKLY;
        } else if (
          slug.endsWith('-complete') ||
          slug.endsWith('-guide') ||
          slug.endsWith('-roadmap') ||
          slug.endsWith('-workflow-guide')
        ) {
          // Consolidated complete guides: high priority
          item.priority = 0.8;
          item.changefreq = ChangeFreqEnum.MONTHLY;
        } else {
          // Regular posts
          item.priority = 0.5;
          item.changefreq = ChangeFreqEnum.MONTHLY;
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
      remarkMath,
      [
        remarkLinkCard,
        {
          cache: true,
          shortenUrl: true,
          thumbnailPosition: 'right',
        },
      ],
    ],
    rehypePlugins: [
      rehypeKatex,
      responsiveTablesRehypePlugin,
      lazyImagesRehypePlugin,
      normalizeInternalLinksRehypePlugin,
    ],
  },

  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },
});

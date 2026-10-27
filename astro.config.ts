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
  learnerCalloutRemarkPlugin,
  mermaidFenceRemarkPlugin,
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
    // re-content 統合 (2026-10-20): ITP→APロードマップは ap-hub に統合（ap-hub は 2026-10-21 に advanced-ipa-hub へ統合）、学習ルート比較は itp-hub と重複のため削除
    '/career/it-passport-to-ap-roadmap/': '/method/advanced-ipa-hub/',
    '/method/it-passport-study-route-comparison/': '/method/itp-hub/',
    // re-content 統合 (2026-10-20): セキュマネ総論は backoffice-sg-career-hack と重複のため統合
    '/career/backoffice-sg-strategy/': '/career/backoffice-sg-career-hack/',
    // re-content 統合 (2026-10-20): 非エンジニアのITパスポート活用は itp-hub のキャリア戦略節に統合
    '/career/itp-non-engineer-career-strategy/': '/method/itp-hub/',
    // re-content 統合 (2026-10-21): 生成AI分野のNotebookLM出題は notebooklm-ip-study-hack に統合
    '/method/genai-problem-mastery-notebooklm/': '/method/notebooklm-ip-study-hack/',
    // re-content 統合 (2026-10-21): タブレット学習はデバイス使い分け記事と内容が重なるため統合
    '/method/tablet-study-guide/': '/method/multi-device-cert-study/',
    // re-content 統合 (2026-10-21): MOSのAI学習法・出題形式は mos-hub に統合
    '/method/mos-ai-shortcut/': '/method/mos-hub/',
    '/theory/mos-exam-format-scoring-basics/': '/method/mos-hub/',
    // re-content 統合 (2026-10-21): 応用情報・Level4・登竜門の各記事は advanced-ipa-hub に統合
    '/method/ap-hub/': '/method/advanced-ipa-hub/',
    '/method/level4-strategy-hub/': '/method/advanced-ipa-hub/',
    '/career/gateway-to-advanced/': '/method/advanced-ipa-hub/',
    // re-content 統合 (2026-10-21): CCNAのAI学習法・不合格後の立て直しは ccna-hub に集約
    '/method/ccna-ai-hack/': '/method/ccna-hub/',
    '/method/ccna-fail-comeback/': '/method/ccna-hub/',
    // re-content 統合 (2026-10-21): LPIC・CCNA・AWSの取る順番は aws-hub に集約
    '/trend/lpic-ccna-aws-order/': '/method/aws-hub/',
    // re-content 統合 (2026-10-21): FPの級の違い・2級の受験資格は fp-hub に統合
    '/trend/fp-why-2kyu-is-standard/': '/method/fp-hub/',
    '/career/fp2-jukendekaku-junbi-roadmap/': '/method/fp-hub/',
    // re-content 統合 (2026-10-21): 不合格後の立て直し・CBT申込の流れは fp-hub に統合
    '/trend/fp2-cbt-strategy/': '/method/fp-hub/',
    // re-content 統合・排除 (2026-10-25): 愛知編は地域別年収の記事に統合、生成AI用語のシラバス解説・CBT操作感の記事は排除（転送先は itp-hub）
    '/career/liberal-arts-it-strategy-aichi/': '/career/regional-salary-qualification-correlation/',
    '/method/ai-problem-master-syllabus/': '/method/itp-hub/',
    '/method/cbt-exam-tactics/': '/method/itp-hub/',
    // re-content 統合 (2026-10-25): ITパスポートの分野別ドリル3本（ストラテジ・マネジメント・テクノロジ）を ip-field-drill に統合
    '/app/ip-strategy-drill/': '/app/ip-field-drill/',
    '/app/ip-management-drill/': '/app/ip-field-drill/',
    '/app/ip-technology-drill/': '/app/ip-field-drill/',
    // re-content 統合 (2026-10-25): MOS Excelエキスパートの難しさは mos-hub に統合
    '/method/mos-excel-expert-difficulty/': '/method/mos-hub/',
    // re-content 統合 (2026-10-21): ITパスポートの価値の総論は itp-hub のFAQに統合
    '/career/ip-survival-strategy/': '/method/itp-hub/',
    // re-content 統合 (2026-10-21): SESとAPの独立戦略は ses-ap-strategy に統合
    '/career/ses-ap-independence-strategy/': '/career/ses-ap-strategy/',
    // re-content 統合 (2026-10-21): 擬似言語のAI可視化は科目Bアルゴリズム対策に統合
    '/method/fe-pseudo-code-visual-hack/': '/method/fe-algorithm-roadmap/',
    // re-content 昇格 (2026-10-21): ITパスポート直前10日は、全試験共通の直前期の記事 exam-final-10-days に改稿
    '/method/itp-10-days-panic-hack/': '/method/exam-final-10-days/',
    // re-content 統合 (2026-10-21): STの論文ブレストは advanced-ipa-hub のITストラテジスト節に統合
    '/method/st-strategy-brainstorming/': '/method/advanced-ipa-hub/',
    // re-content 統合 (2026-10-21): 標的型メールと、経営層向けのSGの価値は、情報漏えい対策の記事に統合
    '/trend/targeted-threat-email/': '/trend/security-incident-prevention-basics/',
    '/trend/sg-exam-popularity-step-up/': '/trend/security-incident-prevention-basics/',
    // re-content 統合 (2026-10-21): ゼロトラストの用語説明はセキュリティ対策の基礎に、STのAI導入の論点は advanced-ipa-hub に統合
    '/trend/zero-trust-architecture/': '/theory/security-controls-crypto-incident-basics/',
    '/trend/st-ai-pov-strategy/': '/method/advanced-ipa-hub/',
    // re-content 統合 (2026-10-21): 高度試験向け生成AIドリルは genai-ethics-quiz のページに同居
    '/app/genai-trend-quiz/': '/app/genai-ethics-quiz/',
    // re-content 統合 (2026-10-21): アジャイル・スクラムの用語記事は theory/agile-scrum-basics に集約
    '/trend/agile-development/': '/theory/agile-scrum-basics/',
    '/trend/scrum-agile/': '/theory/agile-scrum-basics/',
    // re-content 刷新 (2026-10-21): リスキリングの用語解説は theory へ移動
    '/trend/reskilling-it-passport/': '/theory/reskilling-basics/',
    // re-content 統合 (2026-10-21): ビル管理士の実務経験の満たし方は biru-kanri-hub に統合
    '/career/biru-kanri-jitsumu-keiken-roadmap/': '/method/biru-kanri-hub/',
    // re-content 統合 (2026-10-21): 「基本情報は意味ない」論は fe-hub に統合
    '/trend/fe-certification-value-debate/': '/method/fe-hub/',
    // re-content 統合 (2026-10-25): 危険物乙4と電験三種の手当記事は資格手当の相場一覧に統合
    '/career/kikenbutsu-otsu4-teate/': '/career/shikaku-teate-soba-ichiran/',
    '/theory/denken3-sennin-teate/': '/career/shikaku-teate-soba-ichiran/',
    // re-content 統合 (2026-10-25): SES×APの地域別3本と、応用情報の合格後の活用は ses-ap-strategy に統合
    '/career/ses-ap-strategy-miyagi/': '/career/ses-ap-strategy/',
    '/career/ses-ap-strategy-kanagawa/': '/career/ses-ap-strategy/',
    '/career/ses-ap-strategy-hokkaido/': '/career/ses-ap-strategy/',
    '/career/ap-cert-practical-use-hack/': '/career/ses-ap-strategy/',
    // re-content 統合 (2026-10-25): 広島・静岡のバックオフィス×SG記事は backoffice-sg-career-hack に統合
    '/career/backoffice-sg-strategy-hiroshima/': '/career/backoffice-sg-career-hack/',
    '/career/backoffice-sg-strategy-shizuoka/': '/career/backoffice-sg-career-hack/',
    // re-content 統合 (2026-10-25): 福岡編と地方事務職の記事は地域別年収の記事に統合
    '/career/liberal-arts-it-strategy-fukuoka/': '/career/regional-salary-qualification-correlation/',
    '/career/itp-rural-salary-hack/': '/career/regional-salary-qualification-correlation/',
    // re-content 統合 (2026-10-25): 高度試験の市場価値と報奨金の交渉は IPA資格と年収の記事に統合
    '/career/advanced-ipa-certification-high-salary-impact/': '/career/ipa-certification-salary-impact/',
    '/career/ipa-reward-negotiation-hack/': '/career/ipa-certification-salary-impact/',
    // re-content 統合 (2026-10-25): 基本情報の会社命令・フリーランス・非エンジニア向けの記事は fe-engineer-foundation に統合
    '/career/fe-useless-corporate-hack/': '/career/fe-engineer-foundation/',
    '/career/freelance-fe-merit/': '/career/fe-engineer-foundation/',
    '/career/fundamental-it-engineer-for-non-engineers/': '/career/fe-engineer-foundation/',
    // re-content 統合 (2026-10-25): 「ITパスポートは恥ずかしい」の2本を itp-shameful-career-hack に統合
    '/trend/it-passport-shame-debate/': '/career/itp-shameful-career-hack/',
    // re-content 統合 (2026-10-25): 文系学生の新卒戦略は liberal-arts-it-strategy に統合
    '/career/liberal-arts-student-strategy/': '/career/liberal-arts-it-strategy/',
    // re-content 統合 (2026-10-25): CCNAのキャリア・新卒就活の記事は ccna-hub に統合
    '/career/ccna-network-engineer-career/': '/method/ccna-hub/',
    '/career/ccna-new-grad-company-filter/': '/method/ccna-hub/',
    // re-content 統合 (2026-10-25): 3C分析とコアコンピタンスは SWOT分析の記事に統合（環境分析と自社の強みを1ページに）
    '/theory/three-c-analysis/': '/theory/swot-analysis/',
    '/theory/core-competence/': '/theory/swot-analysis/',
    // re-content 統合 (2026-10-25): PPMとアンゾフの成長マトリクスは product-life-cycle に統合（製品と事業の戦略を1ページに）
    '/theory/ppm-portfolio/': '/theory/product-life-cycle/',
    '/theory/ansoff-matrix/': '/theory/product-life-cycle/',
    // re-content 統合 (2026-10-25): コーポレートガバナンス・コンプライアンス・GXは CSR・SDGs・ESG投資の記事に統合（企業の責任の用語を1ページに）
    '/theory/corporate-governance/': '/theory/csr-sdgs-esg-investment/',
    '/theory/compliance/': '/theory/csr-sdgs-esg-investment/',
    '/trend/gx-green-transformation/': '/theory/csr-sdgs-esg-investment/',
    // re-content 統合 (2026-10-25): CRM・SCMとインボイス制度は ERP の記事に統合（業務システムと法対応を1ページに）
    '/theory/crm-scm-management/': '/theory/erp-system-integration/',
    '/trend/invoice-system/': '/theory/erp-system-integration/',
    // re-content 統合 (2026-10-25): ストレージ(HDD/SSD)は CPU・メモリの記事に統合（ハードウェア基礎を1ページに）
    '/theory/storage-hdd-ssd/': '/theory/cpu-memory-functions/',
    // re-content 統合 (2026-10-25): OS制御（タスク管理・割込み・仮想記憶）は OS の記事に統合
    '/theory/fe-os-control/': '/theory/os-operating-systems/',
    // re-content 統合 (2026-10-25): FE向けTCP/IP・サブネットと5Gは network-database-fundamentals に統合
    '/theory/fe-network-basics/': '/theory/network-database-fundamentals/',
    '/trend/5g-technology/': '/theory/network-database-fundamentals/',
    // re-content 統合 (2026-10-25): ウォーターフォール・DevOps・OODAループは agile-scrum-basics に統合（開発手法の用語を1ページに）
    '/theory/waterfall-development/': '/theory/agile-scrum-basics/',
    '/trend/devops/': '/theory/agile-scrum-basics/',
    '/trend/ooda-loop/': '/theory/agile-scrum-basics/',
    // re-content 統合 (2026-10-25): V字モデルは white-black-box-testing に統合（テスト手法と工程を1ページに）
    '/theory/v-model-testing-phases/': '/theory/white-black-box-testing/',
    // re-content 統合 (2026-10-25): 集合と論理演算は 2進数・16進数の記事に統合（数の表現と条件判断を1ページに）
    '/theory/sets-logical-operations/': '/theory/binary-hexadecimal-basics/',
    // re-content 統合 (2026-10-25): データ構造(スタック・キュー・木)は algorithm-search-sort に統合
    '/theory/data-structures-basics/': '/theory/algorithm-search-sort/',
    // re-content 統合 (2026-10-25): TLS・IPsec・認証プロトコル(応用情報)は security-controls-crypto-incident-basics に統合
    '/theory/ap-security-protocols/': '/theory/security-controls-crypto-incident-basics/',
    // re-content 統合 (2026-10-25): ディープラーニング基礎は ml-supervised-unsupervised に統合
    '/theory/deep-learning-basics/': '/theory/ml-supervised-unsupervised/',
    // re-content 統合 (2026-10-25): エクセルアレルギー対処は mos-excel-function-basics に統合
    '/method/mos-kansuu-oboerarenai-hack/': '/theory/mos-excel-function-basics/',
    // re-content 統合 (2026-10-25): MOS Word・PowerPoint基礎は mos-hub に統合
    '/theory/mos-word-powerpoint-basics/': '/method/mos-hub/',
    // re-content 統合 (2026-10-25): ルーティングプロトコル(OSPF/EIGRP/RIP)は ccna-vlan-stp に統合（CCNAの主要2領域を1ページに）
    '/theory/ccna-routing-protocols/': '/theory/ccna-vlan-stp/',
    // re-content 統合 (2026-10-25): ハルシネーション・マルチモーダル・RAG・XAI・AIアシスタント・MLOps は generative-ai-terms-basics に統合
    '/trend/hallucination-ai-error/': '/theory/generative-ai-terms-basics/',
    '/trend/multi-modal-ai/': '/theory/generative-ai-terms-basics/',
    '/trend/rag-ai-system/': '/theory/generative-ai-terms-basics/',
    '/trend/explainable-ai-xai/': '/theory/generative-ai-terms-basics/',
    '/trend/ai-assistant/': '/theory/generative-ai-terms-basics/',
    '/trend/mlops/': '/theory/generative-ai-terms-basics/',
    // re-content 統合 (2026-10-25): AI生成物の著作権・AI倫理・オプトアウト・ディープフェイクは ai-law-ethics-basics に統合
    '/trend/copyright-ai-generated/': '/theory/ai-law-ethics-basics/',
    '/trend/ai-ethics-governance/': '/theory/ai-law-ethics-basics/',
    '/trend/ai-opt-out-policy/': '/theory/ai-law-ethics-basics/',
    '/trend/deepfake/': '/theory/ai-law-ethics-basics/',
    // re-content 統合 (2026-10-25): 多要素認証・SQLインジェクション・XSS・ランサムウェアは cyber-attack-countermeasures-basics に統合
    '/trend/multi-factor-authentication/': '/theory/cyber-attack-countermeasures-basics/',
    '/trend/sql-injection-vulnerability/': '/theory/cyber-attack-countermeasures-basics/',
    '/trend/cross-site-scripting/': '/theory/cyber-attack-countermeasures-basics/',
    '/trend/ransomware-security/': '/theory/cyber-attack-countermeasures-basics/',
    // re-content 統合 (2026-10-25): DE&Iと人的資本報告(ISO 30414)は human-capital-management に統合
    '/trend/dei-diversity-equity-inclusion/': '/trend/human-capital-management/',
    '/trend/human-capital-reporting-iso30414/': '/trend/human-capital-management/',
    // re-content 統合 (2026-10-25): DX(デジタルトランスフォーメーション)の定義は dx-leadership-mvv-digital-divide に統合
    '/trend/dx-digital-transformation/': '/theory/dx-leadership-mvv-digital-divide/',
    // re-content 統合 (2026-10-25): AP午後・NW過去問・PM午後Ⅱ・SCの記述対策は ap-pm-descriptive-ai-prompts に統合
    '/method/ap-afternoon-ai-coaching/': '/method/ap-pm-descriptive-ai-prompts/',
    '/method/nw-kakomon-ai-hack/': '/method/ap-pm-descriptive-ai-prompts/',
    '/method/pm-pm2-module-hack/': '/method/ap-pm-descriptive-ai-prompts/',
    '/method/sc-timeline-hack/': '/method/ap-pm-descriptive-ai-prompts/',
    '/method/sc-descriptive-self-loop-hack/': '/method/ap-pm-descriptive-ai-prompts/',
    // re-content 統合 (2026-10-25): FE科目Bのドリル・Python変換・擬似言語入門は ai-prompt-hub と algorithm-roadmap に統合
    '/method/fe-subject-b-drill/': '/method/fe-subject-b-ai-prompt-hub/',
    // re-content 統合 (2026-10-25): FE科目Bのドリル・Python変換・擬似言語入門は ai-prompt-hub と algorithm-roadmap に統合
    '/method/fe-pseudo-code-ai-hack/': '/method/fe-algorithm-roadmap/',
    '/method/pseudo-code-bridge-to-fe/': '/method/fe-algorithm-roadmap/',
    // re-content 統合 (2026-10-25): NotebookLMの他AI連携とPDF変換手順は notebooklm-features-guide に統合
    '/method/notebooklm-ai-workflow-guide/': '/method/notebooklm-features-guide/',
    '/method/pdf-to-text-guide/': '/method/notebooklm-features-guide/',
    // re-content 統合 (2026-10-25): IPAシラバス変更の追随は syllabus-diff-hack に統合
    '/trend/ipa-syllabus-follow-up/': '/method/syllabus-diff-hack/',
    // re-content 統合 (2026-10-25): IPA試験の最新動向・2027年再編・年代別の狙い目は ipa-2027-restructuring に統合
    '/trend/ipa-exam-trends-2026/': '/trend/ipa-2027-restructuring/',
    '/career/ipa-new-exam-target-guide/': '/trend/ipa-2027-restructuring/',
    // re-content 統合 (2026-10-25): 科学的な学習法の3記事を scientific-study-methods に集約
    '/method/3kw-study-method/': '/method/scientific-study-methods/',
    '/method/diversity-study-method/': '/method/scientific-study-methods/',
    // re-content 統合 (2026-10-25): イーロン・マスクの知識の木は 20hours-method-reason に統合
    '/method/musk-semantic-tree-fundamentals/': '/method/20hours-method-reason/',
    // re-content 統合 (2026-10-25): 試験当日のコンディションと欠席時の報告は exam-final-10-days に統合
    '/method/exam-day-doping/': '/method/exam-final-10-days/',
    '/method/ipa-absence-report-hack/': '/method/exam-final-10-days/',
    // re-content 統合 (2026-10-25): 不正解の選択肢の解剖は miss-note-db に統合
    '/method/wrong-choice-analysis-hack/': '/method/miss-note-db/',
    // re-content 統合 (2026-10-25): AI家庭教師の使い方は ai-mentor-study-method-roadmap に統合
    '/method/agent-teacher/': '/method/ai-mentor-study-method-roadmap/',
    // re-content 統合 (2026-10-25): マネジメント系長文の読み方は ip-strategy-ai-hack に統合
    '/method/management-comprehension-hack/': '/method/ip-strategy-ai-hack/',
    // re-content 統合 (2026-10-25): 音声アウトプット学習は generative-memory-palace に統合
    '/method/voice-output-learning/': '/method/generative-memory-palace/',
    // re-content 統合 (2026-10-25): ベクトル検索とAIプロジェクト品質管理は advanced-ipa-hub に統合
    '/trend/db-vector-search-rag/': '/method/advanced-ipa-hub/',
    '/trend/pm-ai-quality-management/': '/method/advanced-ipa-hub/',
    // re-content 統合 (2026-10-25): リスキリングの記事5本は theory/reskilling-basics に統合
    '/trend/reskilling-yameta-riyuu/': '/theory/reskilling-basics/',
    '/trend/reskilling-era-mindset-shift/': '/theory/reskilling-basics/',
    '/trend/government-reskilling-university-60man/': '/theory/reskilling-basics/',
    '/method/continuous-learning-reskilling-beyond-itp/': '/theory/reskilling-basics/',
    '/career/reskilling-success-story-it-passport-to-data-scientist/': '/theory/reskilling-basics/',
    // re-content 統合 (2026-10-25): 生成AI系資格の価値は genai-passport-vs-it-passport に統合
    '/trend/generative-ai-certification-worth/': '/trend/genai-passport-vs-it-passport/',
    // re-content 統合 (2026-10-25): ボイラー技士の引っ掛け問題対策は boiler-refrigeration-hub に統合
    '/method/boiler-hikkake-mondai-ai-hack/': '/method/boiler-refrigeration-hub/',
    // re-content 統合 (2026-10-25): 危険物乙4の1週間プランは kiken-butsu-hub に統合
    '/method/kiken-butsu-isshukan-hack/': '/method/kiken-butsu-hub/',
    // re-content 統合 (2026-10-25): 知財検定2級の実技対策は chiteki-zaisan-hub に統合
    '/method/chiteki-zaisan-2kyu-jitsugi-jirei-ai-hack/': '/method/chiteki-zaisan-hub/',
    // re-content 統合 (2026-10-25): 消防設備士乙6の不合格診断は shobo-setsubi-hub に統合
    '/method/shobo-setsubi-otsu6-fail-diagnosis/': '/method/shobo-setsubi-hub/',
    // re-content 統合 (2026-10-25): 学生向けのビル管理系資格は biru-kanri-hub に統合
    '/method/manshon-energy-student-hack/': '/method/biru-kanri-hub/',
    // re-content 統合 (2026-10-25): TOEICのシャドーイングと昇進要件は toeic-hub に統合
    '/method/toeic-shadowing-ai-hack/': '/method/toeic-hub/',
    '/career/toeic-shoushin-youken-kigyou/': '/method/toeic-hub/',
    // re-content 統合 (2026-10-25): FP2級のタックス計算・シミュレーター・知識目的・実技の団体比較は fp-hub に統合
    '/method/fp-tax-planning-calc-hack/': '/method/fp-hub/',
    '/method/fp-ai-simulator-hack/': '/method/fp-hub/',
    '/trend/fp-knowledge-without-passing-cert/': '/method/fp-hub/',
    '/trend/fp2-jitsuki-comparison/': '/method/fp-hub/',
    // re-content 統合 (2026-10-25): 宅建の民法AI記憶術は takken-hub に統合
    '/method/takken-minpou-ai-memory-hack/': '/method/takken-hub/',
    // re-content 統合 (2026-10-25): 簿記の仕訳ドリルと経理キャリアは boki-hub に統合
    '/method/boki-shiwake-drill-hack/': '/method/boki-hub/',
    '/career/boki-keiri-career-roadmap/': '/method/boki-hub/',
    // re-content 統合 (2026-10-25): 土木施工管理の実務経験の積み方は doboku-sekou-hub に統合
    '/career/doboku-sekou-jitsumu-keiken-hack/': '/method/doboku-sekou-hub/',
    // re-content 統合 (2026-10-25): G検定の数学・統計とシラバス動向は g-kentei-hub に統合
    '/method/g-kentei-math-statistics-hack/': '/method/g-kentei-hub/',
    '/trend/g-kentei-2026-syllabus-trend/': '/method/g-kentei-hub/',
    // re-content 統合 (2026-10-25): DS検定の概要は ds-kentei-hub に統合
    '/trend/ds-kentei/': '/method/ds-kentei-hub/',
    // re-content 統合 (2026-10-25): 経営層向けのセキュリティ投資の判断は security-incident-prevention-basics に統合
    '/trend/exec-security-investment-ai-era/': '/trend/security-incident-prevention-basics/',
    // re-content 統合 (2026-10-25): SGの『意味がない』という声への答えは sg-hub に統合
    '/method/sg-meaningless-rumors-hack/': '/method/sg-hub/',
    // CBT系統合 (2026-06-10): cbt-impact-advanced-exams の固有情報をマージ
    '/cbt-impact-advanced-exams/': '/method/cbt-2026-syllabus-complete-guide/',
    '/method/cbt-impact-advanced-exams/': '/method/cbt-2026-syllabus-complete-guide/',
    '/trend/cbt-impact-advanced-exams/': '/method/cbt-2026-syllabus-complete-guide/',
    // グループD: 直前対策統合 (2026-05-30)
    '/final-checkpoint-100-plus/': '/method/exam-final-10-days/',
    '/method/final-checkpoint-100-plus/': '/method/exam-final-10-days/',
    // グループB: NotebookLM統合 (2026-05-30) — 旧redirect先も新ガイドへ転送
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
    '/notebooklm-syllabus-study-method/': '/method/notebooklm-features-guide/',
    '/method/notebooklm-syllabus-study-method/': '/method/notebooklm-features-guide/',
    '/notebooklm-100-day-hack/': '/method/notebooklm-features-guide/',
    '/method/notebooklm-100-day-hack/': '/method/notebooklm-features-guide/',
    '/notebooklm-100days-challenge-hack/': '/method/notebooklm-features-guide/',
    '/method/notebooklm-100days-challenge-hack/': '/method/notebooklm-features-guide/',
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
    '/term/sampling-methods-data/': '/theory/statistics-mean-variance-probability-sampling/',
    '/term/digital-divide-basics/': '/theory/digital-divide-basics/',
    '/term/standard-deviation-variance/': '/theory/statistics-mean-variance-probability-sampling/',
    '/term/labor-dispatch-act-ses/': '/theory/labor-dispatch-act-ses/',
    '/term/mean-median-mode-stats/': '/theory/statistics-mean-variance-probability-sampling/',
    '/term/subcontract-act-it-dev/': '/theory/it-legal-basics-ip-subcontract-contracts/',
    '/term/profit-and-loss-statement-pl/': '/theory/corporate-finance-pl-bs-cf-roi-basics/',
    '/term/labor-standards-act-36-agreement/': '/theory/labor-standards-act-36-agreement/',
    '/term/cpu-memory-functions/': '/theory/cpu-memory-functions/',
    '/term/sets-logical-operations/': '/theory/binary-hexadecimal-basics/',
    '/term/text-mining-nlp/': '/theory/text-mining-nlp/',
    '/strategy/quality-control-abc-fishbone-scatter/': '/theory/qc-seven-tools-abc-fishbone-scatter/',
    '/strategy/system-development-contracts-ses-outsourcing-risk/': '/theory/it-legal-basics-ip-subcontract-contracts/',
    '/strategy/data-profitability-dwh-mining-regression/': '/theory/data-warehouse-mining-regression-basics/',
    '/strategy/business-math-statistics-average-variance-bayes/': '/theory/statistics-mean-variance-probability-sampling/',
    '/strategy/cloud-service-selection-saas-paas-iaas/': '/theory/cloud-saas-paas-iaas-basics/',
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
      learnerCalloutRemarkPlugin,
      mermaidFenceRemarkPlugin,
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

/** @jsxImportSource preact */
import { useState, useEffect } from 'preact/hooks';
import './region-widget.css';

const LS_KEY = 'syllabus-hack-region';

interface RegionArticle {
  title: string;
  slug: string;
  description: string;
}

const REGION_MAP: Record<string, RegionArticle[]> = {
  '北海道': [
    { title: '【北海道編】札幌で上位キャリアを築くための応用情報（AP）ロードマップ', slug: '/career/ses-ap-strategy-hokkaido/', description: '道内IT企業・自社開発求人を狙うAP活用戦略' },
  ],
  '宮城': [
    { title: '【宮城編】仙台の自社開発企業を狙うための応用情報（AP）活用術', slug: '/career/ses-ap-strategy-miyagi/', description: '仙台IT集積エリアを活かすキャリアパス' },
  ],
  '東京': [
    { title: '【東京都版】超高密度な交通網を「合格タイマー」に変える戦略', slug: '/method/region-hack-tokyo/', description: '通勤時間を学習時間に変換する東京式ハック' },
  ],
  '神奈川': [
    { title: '【神奈川編】満員電車を「耳」で攻略！通勤エンジニアのロングトレイン術', slug: '/career/ses-ap-strategy-kanagawa/', description: '横浜・川崎のIT求人市場と資格の使い方' },
  ],
  '静岡': [
    { title: '【静岡編】バックオフィス×セキュリティマネジメント合格戦略', slug: '/career/backoffice-sg-strategy-shizuoka/', description: '製造業・物流拠点での情報セキュリティ人材ニーズ' },
  ],
  '愛知': [
    { title: '【愛知編】製造業DXの波に乗る！文系学生のためのIT資格活用術', slug: '/career/liberal-arts-it-strategy-aichi/', description: '名古屋・豊田の製造業DX文脈でのIT資格価値' },
  ],
  '大阪': [
    { title: '【大阪版】梅田・難波のオフィス街をゴールに、DS検定から始める学習設計', slug: '/method/region-hack-osaka/', description: '大阪ITクラスターへの最短ルート設計' },
  ],
  '広島': [
    { title: '【広島編】広電（路面電車）のリズムをスキマ学習に変える暗記ハック', slug: '/career/backoffice-sg-strategy-hiroshima/', description: '地方中核都市でのバックオフィス×セキュリティ戦略' },
  ],
  '福岡': [
    { title: '【福岡編】スタートアップ特区×ITで攻める文系就活ハック', slug: '/career/liberal-arts-it-strategy-fukuoka/', description: '福岡スタートアップ集積地でのIT資格活用' },
  ],
};

const DEFAULT_ARTICLES: RegionArticle[] = [
  { title: '地方事務職がITパスポートを取っても給料が上がらない本当の理由', slug: '/career/itp-rural-salary-hack/', description: '地方×IT資格の現実と突破策' },
  { title: '【全国版】地方ITキャリアを「資格×地域ハック」で攻略する', slug: '/career/regional-it-career-hub/', description: '都道府県別キャリア戦略のまとめ' },
];

const PREFECTURES = [
  '北海道', '青森', '岩手', '宮城', '秋田', '山形', '福島',
  '茨城', '栃木', '群馬', '埼玉', '千葉', '東京', '神奈川',
  '新潟', '富山', '石川', '福井', '山梨', '長野', '岐阜', '静岡', '愛知',
  '三重', '滋賀', '京都', '大阪', '兵庫', '奈良', '和歌山',
  '鳥取', '島根', '岡山', '広島', '山口',
  '徳島', '香川', '愛媛', '高知',
  '福岡', '佐賀', '長崎', '熊本', '大分', '宮崎', '鹿児島', '沖縄',
];

export default function RegionWidget() {
  const [region, setRegion] = useState<string>('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem(LS_KEY);
    if (saved) setRegion(saved);
  }, []);

  const handleChange = (e: Event) => {
    const val = (e.target as HTMLSelectElement).value;
    setRegion(val);
    if (val) {
      localStorage.setItem(LS_KEY, val);
    } else {
      localStorage.removeItem(LS_KEY);
    }
  };

  const articles = region ? (REGION_MAP[region] ?? DEFAULT_ARTICLES) : null;

  if (!mounted) return null;

  return (
    <div class="region-widget">
      <div class="region-widget-header">
        <span class="region-widget-icon">📍</span>
        <p class="region-widget-label">あなたの地域に合わせたキャリアハックを表示します</p>
      </div>

      <select class="region-widget-select" value={region} onChange={handleChange}>
        <option value="">都道府県を選択してください</option>
        {PREFECTURES.map((p) => (
          <option key={p} value={p}>
            {p}
            {REGION_MAP[p] ? ' ✓' : ''}
          </option>
        ))}
      </select>

      {articles && (
        <div class="region-widget-results">
          <p class="region-widget-region-label">
            <strong>{region || '全国'}</strong>向けの記事
          </p>
          <ul class="region-widget-list">
            {articles.map((a) => (
              <li key={a.slug} class="region-widget-item">
                <a href={a.slug} class="region-widget-link">
                  <span class="region-widget-title">{a.title}</span>
                  <span class="region-widget-desc">{a.description}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {!region && (
        <p class="region-widget-hint">
          ✓ マークの都道府県には専用記事があります。それ以外は全国版を表示します。
        </p>
      )}
    </div>
  );
}

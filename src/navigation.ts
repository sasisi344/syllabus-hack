import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';
import { certGroups, headerCertLinks } from './data/cert-hubs';

export const headerData = {
  links: [
    {
      text: '資格から探す',
      links: [
        ...headerCertLinks.map(({ name, href }) => ({ text: name, href })),
        { text: 'すべての資格一覧 →', href: getPermalink('/certifications') },
      ],
    },
    {
      text: '学習メソッド',
      links: [
        { text: '学習メソッド', href: getPermalink('method', 'category') },
        { text: '20時間学習', href: getPermalink('/course') },
        { text: '用語解説', href: getPermalink('theory', 'category') },
        { text: 'ウェブアプリ', href: getPermalink('app', 'category') },
      ],
    },
    {
      text: 'コラム',
      links: [
        { text: 'トレンド', href: getPermalink('trend', 'category') },
        { text: 'キャリア', href: getPermalink('career', 'category') },
      ],
    },
  ],
  actions: [{ text: 'お問い合わせ', href: getPermalink('/contact') }],
};

export const footerData = {
  links: [
    ...certGroups.map((group) => ({
      title: group.title,
      links: [
        ...group.items.slice(0, 5).map(({ name, href }) => ({ text: name, href })),
        { text: '他のも見る', href: `${getPermalink('/certifications')}#${group.slug}` },
      ],
    })),
    {
      title: '学び方',
      links: [
        { text: '資格から探す', href: getPermalink('/certifications') },
        { text: '学習メソッド', href: getPermalink('method', 'category') },
        { text: '20時間学習', href: getPermalink('/course') },
        { text: '用語解説', href: getPermalink('theory', 'category') },
        { text: 'ウェブアプリ', href: getPermalink('app', 'category') },
      ],
    },
    {
      title: 'サイト案内',
      links: [
        { text: 'トレンド', href: getPermalink('trend', 'category') },
        { text: 'キャリア', href: getPermalink('career', 'category') },
        { text: 'お問い合わせ', href: getPermalink('/contact') },
      ],
    },
  ],
  secondaryLinks: [
    { text: '利用規約', href: getPermalink('/terms') },
    { text: 'プライバシーポリシー', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://twitter.com/sasisi344' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    &copy; 2026 Syllabus Hack. All rights reserved.
  `,
};

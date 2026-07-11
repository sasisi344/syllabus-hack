import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';
import { headerCertLinks } from './data/cert-hubs';

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
      text: 'トレンド',
      href: getPermalink('trend', 'category'),
    },
    {
      text: '学習メソッド',
      href: getPermalink('method', 'category'),
    },
    {
      text: 'キャリア',
      href: getPermalink('career', 'category'),
    },
    {
      text: '用語解説',
      href: getPermalink('theory', 'category'),
    },
    {
      text: 'ウェブアプリ',
      href: getPermalink('app', 'category'),
    },
  ],
  actions: [{ text: 'お問い合わせ', href: getPermalink('/contact') }],
};

export const footerData = {
  links: [
    {
      title: 'コンテンツ',
      links: [
        { text: '資格から探す', href: getPermalink('/certifications') },
        { text: 'トレンド', href: getPermalink('trend', 'category') },
        { text: '学習メソッド', href: getPermalink('method', 'category') },
        { text: 'キャリア戦略', href: getPermalink('career', 'category') },
        { text: '用語解説', href: getPermalink('theory', 'category') },
        { text: 'ウェブアプリ', href: getPermalink('app', 'category') },
      ],
    },
    {
      title: 'コミュニティ',
      links: [
        { text: 'Syllabus Hackについて', href: getPermalink('/about') },
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

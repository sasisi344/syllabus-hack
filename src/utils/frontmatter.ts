import getReadingTime from 'reading-time';
import { toString } from 'mdast-util-to-string';
import { visit } from 'unist-util-visit';
import type { RehypePlugin, RemarkPlugin } from '@astrojs/markdown-remark';

/** Must match `site.site` in src/config.yaml (virtual `astrowind:config` is unavailable in this module). */
const SITE_ORIGIN = 'https://syllabushack.com';

export const readingTimeRemarkPlugin: RemarkPlugin = () => {
  return function (tree, file) {
    const textOnPage = toString(tree);
    const readingTime = Math.ceil(getReadingTime(textOnPage).minutes);

    if (typeof file?.data?.astro?.frontmatter !== 'undefined') {
      file.data.astro.frontmatter.readingTime = readingTime;
    }
  };
};

/**
 * Author's learning-note callouts (post_writer.md Step 0-5). Other callout types (e.g. [!NOTE]) are left untouched.
 * exp / question are the author's reactions to a problem, so they render as prominent speech bubbles; think is a quieter memo.
 */
const CALLOUT_VARIANTS = {
  exp: {
    label: 'やってみて思ったこと',
    bubble:
      'bg-emerald-50 border-emerald-300 before:bg-emerald-50 before:border-emerald-300 dark:bg-[#0b2a20] dark:border-emerald-700 dark:before:bg-[#0b2a20] dark:before:border-emerald-700',
    badge: 'text-emerald-800 dark:text-emerald-300',
    avatar: 'bg-emerald-600 text-white dark:bg-emerald-500',
  },
  question: {
    label: 'この問題、ここが気になる',
    bubble:
      'bg-sky-50 border-sky-300 before:bg-sky-50 before:border-sky-300 dark:bg-[#0a2233] dark:border-sky-700 dark:before:bg-[#0a2233] dark:before:border-sky-700',
    badge: 'text-sky-800 dark:text-sky-300',
    avatar: 'bg-sky-600 text-white dark:bg-sky-500',
  },
  think: {
    label: 'ここ、引っかからない？',
    memo: 'border-amber-400 bg-amber-50/70 dark:border-amber-600 dark:bg-amber-950/20',
    badge: 'text-amber-800 dark:text-amber-300',
  },
} as const;

const CALLOUT_BODY =
  'space-y-2 leading-relaxed text-gray-800 dark:text-slate-200 [&_strong]:font-bold [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_a]:text-primary [&_a]:underline dark:[&_a]:text-blue-400';

const CALLOUT_MARKER = /^\[!(forai|exp|think|question)\][+-]?[ \t]*/i;

const el = (hName: string, className: string, children: unknown[]) => ({
  type: 'calloutPart',
  data: { hName, hProperties: { className: className.split(' ') } },
  children,
});

export const learnerCalloutRemarkPlugin: RemarkPlugin = () => {
  return function (tree) {
    visit(tree, 'blockquote', function (node, index, parent) {
      const first = node.children[0];
      if (first?.type !== 'paragraph' || first.children[0]?.type !== 'text') return;
      const head = first.children[0];
      const match = head.value.match(CALLOUT_MARKER);
      if (!match || !parent || index === undefined) return;

      const kind = match[1].toLowerCase();
      // [!forAI] is an instruction to the AI editor and must never reach readers
      if (kind === 'forai') {
        parent.children.splice(index, 1);
        return index;
      }

      // Text after the marker on the same line is a custom label when a body follows; otherwise it is the body
      const rest = head.value.slice(match[0].length);
      const newline = rest.indexOf('\n');
      const sameLine = (newline === -1 ? rest : rest.slice(0, newline)).trim();
      head.value = newline === -1 ? '' : rest.slice(newline + 1);
      if (!head.value) first.children.shift();
      if (first.children.length === 0) node.children.shift();

      const v = CALLOUT_VARIANTS[kind as keyof typeof CALLOUT_VARIANTS];
      let label: string = v.label;
      if (sameLine && node.children.length > 0) label = sameLine;
      else if (sameLine) node.children.push({ type: 'paragraph', children: [{ type: 'text', value: sameLine }] });

      const labelNode = el('p', `mb-1 text-xs font-bold ${v.badge}`, [{ type: 'text', value: label }]);

      if ('memo' in v) {
        parent.children[index] = el('aside', `not-prose my-6 rounded-r-lg border-l-4 px-4 py-3 learner-callout learner-callout-${kind} ${v.memo}`, [
          labelNode,
          el('div', `text-[0.95rem] ${CALLOUT_BODY}`, node.children),
        ]) as never;
        return;
      }

      parent.children[index] = el('aside', `not-prose my-8 flex items-start gap-4 learner-callout learner-callout-${kind}`, [
        el('div', `flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-bold shadow-sm ${v.avatar}`, [
          { type: 'text', value: '筆者' },
        ]),
        el(
          'div',
          `relative min-w-0 flex-1 rounded-2xl border-2 px-5 py-4 shadow-sm before:absolute before:-left-[9px] before:top-4 before:h-4 before:w-4 before:rotate-45 before:border-b-2 before:border-l-2 before:content-[''] ${v.bubble}`,
          [labelNode, el('div', `relative text-base ${CALLOUT_BODY}`, node.children)]
        ),
      ]) as never;
    });
  };
};

export const responsiveTablesRehypePlugin: RehypePlugin = () => {
  return function (tree) {
    if (!tree.children) return;

    for (let i = 0; i < tree.children.length; i++) {
      const child = tree.children[i];

      if (child.type === 'element' && child.tagName === 'table') {
        tree.children[i] = {
          type: 'element',
          tagName: 'div',
          properties: {
            style: 'overflow:auto',
          },
          children: [child],
        };

        i++;
      }
    }
  };
};

export const lazyImagesRehypePlugin: RehypePlugin = () => {
  return function (tree) {
    if (!tree.children) return;

    visit(tree, 'element', function (node) {
      if (node.tagName === 'img') {
        node.properties.loading = 'lazy';
      }
    });
  };
};

const normalizeInternalHref = (href: string): string => {
  if (!href || href.startsWith('//')) return href;

  // Same-origin absolute URLs (e.g. copied from browser without trailing slash)
  if (href.startsWith('http://') || href.startsWith('https://')) {
    try {
      const u = new URL(href);
      if (u.origin !== SITE_ORIGIN) return href;
      const path = u.pathname;
      if (!path || path === '/' || path.endsWith('/')) return href;
      const lastSeg = path.split('/').pop() ?? '';
      if (/\.[a-zA-Z0-9]{1,8}$/.test(lastSeg)) return href;
      u.pathname = `${path}/`;
      return u.href;
    } catch {
      return href;
    }
  }

  if (!href.startsWith('/')) return href;
  if (href === '/') return href;

  const [withoutHash, hash = ''] = href.split('#');
  const [pathname, query = ''] = withoutHash.split('?');

  if (!pathname || pathname === '/' || pathname.endsWith('/')) return href;

  // Keep asset-like URLs (e.g. /rss.xml, /images/a.png) unchanged.
  const lastSegment = pathname.split('/').pop() ?? '';
  if (/\.[a-zA-Z0-9]{1,8}$/.test(lastSegment)) return href;

  const normalizedPath = `${pathname}/`;
  const queryPart = query ? `?${query}` : '';
  const hashPart = hash ? `#${hash}` : '';

  return `${normalizedPath}${queryPart}${hashPart}`;
};

export const normalizeInternalLinksRehypePlugin: RehypePlugin = () => {
  return function (tree) {
    if (!tree.children) return;

    visit(tree, 'element', function (node) {
      if (node.tagName !== 'a') return;
      const href = node.properties?.href;
      if (typeof href !== 'string') return;

      node.properties.href = normalizeInternalHref(href);
    });
  };
};

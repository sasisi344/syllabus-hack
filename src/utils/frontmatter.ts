import getReadingTime from 'reading-time';
import { toString } from 'mdast-util-to-string';
import { visit } from 'unist-util-visit';
import type { RehypePlugin, RemarkPlugin } from '@astrojs/markdown-remark';

export const readingTimeRemarkPlugin: RemarkPlugin = () => {
  return function (tree, file) {
    const textOnPage = toString(tree);
    const readingTime = Math.ceil(getReadingTime(textOnPage).minutes);

    if (typeof file?.data?.astro?.frontmatter !== 'undefined') {
      file.data.astro.frontmatter.readingTime = readingTime;
    }
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
  if (!href || !href.startsWith('/') || href.startsWith('//')) return href;
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

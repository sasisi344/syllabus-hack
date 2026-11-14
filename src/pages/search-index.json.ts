import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { fetchPosts } from '~/utils/blog';
import { getPermalink } from '~/utils/permalinks';

export const prerender = true;

// Index visible text only; editorial comments and hidden instructions are not reader content.
const visibleText = (body: string) =>
  body
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, ' ')
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/^>\s*\[!forAI\][\s\S]*?(?=\n\s*\n|$)/gm, ' ')
    .replace(/^(?:import|export)\s.+$/gm, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/!?\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/https?:\/\/\S+/g, ' ')
    .replace(/[#*`>|{}]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

export const GET: APIRoute = async () => {
  const [posts, entries] = await Promise.all([fetchPosts(), getCollection('post', ({ data }) => !data.draft)]);
  const bodies = new Map(entries.map((entry) => [entry.id, entry.body || '']));
  const index = posts.map((post) => ({
    title: post.title,
    url: getPermalink(post.permalink, 'post'),
    excerpt: post.excerpt || '',
    category: post.category?.title || '',
    tags: post.tags?.map((tag) => tag.title) || [],
    text: visibleText(bodies.get(post.id) || ''),
  }));
  return new Response(JSON.stringify(index), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
};

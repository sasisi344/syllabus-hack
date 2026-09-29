import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const course = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: 'src/data/course', generateId: ({ entry }) => entry.replace(/\.(md|mdx)$/, '') }),
  schema: z.object({ title: z.string(), draft: z.boolean().optional() }),
});
export const collections = { course };

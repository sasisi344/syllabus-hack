import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const metadataDefinition = () =>
  z
    .object({
      title: z.string().optional(),
      ignoreTitleTemplate: z.boolean().optional(),

      canonical: z.string().url().optional(),

      robots: z
        .object({
          index: z.boolean().optional(),
          follow: z.boolean().optional(),
        })
        .optional(),

      description: z.string().optional(),

      openGraph: z
        .object({
          url: z.string().optional(),
          siteName: z.string().optional(),
          images: z
            .array(
              z.object({
                url: z.string(),
                width: z.number().optional(),
                height: z.number().optional(),
              })
            )
            .optional(),
          locale: z.string().optional(),
          type: z.string().optional(),
        })
        .optional(),

      twitter: z
        .object({
          handle: z.string().optional(),
          site: z.string().optional(),
          cardType: z.string().optional(),
        })
        .optional(),
    })
    .optional();

const postCollection = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: 'src/data/post',
    generateId: ({ entry }) => entry.replace(/\\/g, '/').replace(/\/index\.(md|mdx)$/, '').replace(/\.(md|mdx)$/, ''),
  }),
  schema: ({ image }) =>
    z.object({
      publishDate: z.coerce.date().optional(),
      updateDate: z.coerce.date().optional(),
      lastmod: z.coerce.date().optional(),
      draft: z.boolean().optional(),
      toc: z.boolean().optional(),

      title: z.string(),
      excerpt: z.string().optional(),
      image: image().optional(),

      category: z.string().optional(),
      categories: z.array(z.string()).optional(),
      tags: z.array(z.string()).optional(),
      author: z.string().optional(),

      // for App Connectivity
      knowledge: z
        .object({
          examId: z
            .enum([
              'ip',
              'sg',
              'fe',
              'ap',
              'st',
              'sa',
              'pm',
              'nw',
              'db',
              'es',
              'sm',
              'au',
              'sc',
              'common',
              'g-kentei',
              'ds-kentei',
              'ccna',
              'denken',
              'boki',
              'takken',
              'mos',
              'kiken-butsu',
              'biru-kanri',
              'doboku-sekou',
              'chiteki-zaisan',
              'boiler-refrigeration',
              'shobo-setsubi',
              'fp',
              'aws',
              'fintech-it',
              'toeic',
            ])
            .optional(),
          exams: z.array(z.string()).optional(),
          type: z.enum(['term', 'problem', 'method', 'strategy', 'news', 'app', 'career', 'theory', 'trend']).optional(),
          syllabusRef: z.string().optional(),
          difficulty: z.enum(['beginner', 'intermediate', 'advanced']).optional(),
        })
        .optional(),

      faqs: z
        .array(
          z.object({
            question: z.string(),
            answer: z.string(),
          })
        )
        .optional(),

      metadata: metadataDefinition(),
    }),
});

const courseCollection = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: 'src/data/course',
    generateId: ({ entry }) => entry.replace(/\\/g, '/').replace(/\/index\.(md|mdx)$/, '').replace(/\.(md|mdx)$/, ''),
  }),
  schema: z.object({
    title: z.string(),
    examId: z.enum([
      'ip',
      'sg',
      'fe',
      'ap',
      'st',
      'sa',
      'pm',
      'nw',
      'db',
      'es',
      'sm',
      'au',
      'sc',
      'common',
      'g-kentei',
      'ds-kentei',
      'ccna',
      'denken',
      'boki',
      'takken',
      'mos',
      'kiken-butsu',
      'biru-kanri',
      'doboku-sekou',
      'chiteki-zaisan',
      'boiler-refrigeration',
      'shobo-setsubi',
      'fp',
      'aws',
      'fintech-it',
      'toeic',
    ]),
    kind: z.enum(['index', 'chapter']),
    order: z.number().optional(),
    genre: z.string().optional(),
    totalHours: z.number().optional(),
    chapters: z.number().optional(),
    estimatedMinutes: z.number().optional(),
    syllabusRefs: z.array(z.string()).optional(),
    field2027: z.enum(['business', 'technology', 'security-ethics']).optional(),
    quizRef: z.string().optional(),
    relatedPosts: z.array(z.string()).optional(),
    noteUrl: z.string().optional(),
    draft: z.boolean().optional(),
    lastmod: z.coerce.date().optional(),
    metadata: metadataDefinition(),
  }),
});

export const collections = {
  post: postCollection,
  course: courseCollection,
};

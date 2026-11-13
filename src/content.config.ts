import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ base: './src/content/posts', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string().min(1),
    venue: z.string().optional(),
    authors: z.string().optional(),
    abstract: z.string().optional(),
    bibtex: z.string().optional(),
    tags: z.array(z.string()).optional(),
    header: z.object({ teaser: z.string().optional() }).optional(),
    'paper-link': z.string().optional(),
    'arxiv-link': z.string().optional(),
    'code-link': z.string().optional(),
    'data-link': z.string().optional(),
    'docs-link': z.string().optional(),
    'demo-link': z.string().optional(),
    'video-id': z.string().optional(),
    redirect: z.string().optional(),
  }),
});

export const collections = { posts };

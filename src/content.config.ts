import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const shiurim = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/shiurim' }),
  schema: z.object({
    title: z.string(),
    type: z.enum(['meaiver', 'mishtatfim']),
    category: z.enum(['parasha', 'chag', 'nose']),
    parasha: z.string().optional(),
    chag: z.string().optional(),
    nose: z.string().optional(),
    description: z.string(),
    tags: z.array(z.string()).optional(),
    duration: z.string().optional(),
    difficulty: z.enum(['קל', 'בינוני', 'מתקדם']).optional(),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/data/pages' }),
  schema: z.object({
    title: z.string(),
    updated: z.string().optional(),
  }),
});

export const collections = { shiurim, pages };

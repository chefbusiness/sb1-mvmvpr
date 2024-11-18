import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string().default('Pintores El Cañaveral'),
    image: z.string().optional(),
    category: z.enum(['local', 'servicios']),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  })
});

export const collections = {
  'blog': blogCollection,
};
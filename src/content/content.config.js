// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";

// 2. Import loader(s)
import { glob, file } from "astro/loaders";

// 3. Define your collection(s)
const posts = defineCollection({
  loader: glob("./posts/*.md"),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    description: z.string(),
    image: z
      .object({
        url: z.string(),
        alt: z.string(),
      })
      .optional(),
    pubDate: z.date(),
    tags: z.array(z.string()),
    category: z.array(z.string()),
  }),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { posts };

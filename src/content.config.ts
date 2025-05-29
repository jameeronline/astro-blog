// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";

// 2. Import loader(s)
import { glob, file } from "astro/loaders";

// 3. Define your collection(s)
const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/posts" }),
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

// const works = defineCollection({
//   loader: glob({ pattern: "**/*.md", base: "src/content/works" }),
//   schema: z.object({
//     title: z.string(),
//   }),
// });

const teams = defineCollection({
  loader: file("src/content/teams.json"),
  schema: z.object({
    id: z.number(),
    name: z.string(),
    email: z.string(),
    gender: z.string(),
    country: z.string(),
    role: z.string(),
    description: z.string(),
    socialLinks: z.array(
      z.object({
        type: z.string(),
        url: z.string().url(),
      })
    ),
    picture: z.string(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "src/content/projects" }),
  schema: z.object({
    id: z.number(),
    title: z.string(),
    description: z.string(),
    image: z.string(),
    type: z.string(),
    tags: z.array(z.string()),
    technologies: z.array(z.string()),
    github: z.string().url(),
    liveDemo: z.string().url(),
    year: z.number(),
    role: z.string(),
  }),
});

// const projects = defineCollection({
//   loader: file("src/content/projects.json"),
//   schema: z.object({
//     id: z.string(),
//     title: z.string(),
//     description: z.string(),
//     image: z.string(),
//     type: z.string(),
//     tags: z.array(z.string()),
//     challenge: z.string(),
//     solution: z.string(),
//     technologies: z.array(z.string()),
//     github: z.string().url(),
//     liveDemo: z.string().url(),
//     year: z.number(),
//     role: z.string(),
//   }),
// });

// 4. Export a single `collections` object to register your collection(s)
export const collections = { posts, projects, teams };

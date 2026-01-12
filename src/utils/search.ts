// src/utils/search.js
import type { CollectionEntry } from "astro:content";

//generate search index from posts
export async function getSearchIndex(posts: CollectionEntry<"blog">[]) {
  return posts.map((post: CollectionEntry<"blog">) => ({
    id: post.id,
    title: post.data.title,
    description: post.data.description || "",
    tags: post.data.tags || [],
  }));
}

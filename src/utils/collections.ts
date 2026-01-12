import { getCollection, getEntries, getEntry } from "astro:content";


//get all posts
export async function getAllPosts() {
  const posts = await getCollection("blog");
  return posts;
}
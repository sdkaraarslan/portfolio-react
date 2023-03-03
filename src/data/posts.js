import { directus } from "../lib/directus";

export async function getPosts(options = {}) {
  const { category, tags, limit } = options;
  const posts = await directus.items("posts").readByQuery({
    filter: {
      ...(category ? { category } : {}),
      ...(tags ? { tags } : {}),
    },
    limit,
    fields: ["*", "thumbnail.*", "category.*"],
  });
  return posts;
}

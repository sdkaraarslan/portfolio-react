import { directus } from "../lib/directus";

export async function getPosts(options = {}) {
  const { category, tags, limit } = options;
  const posts = await directus.items("posts").readByQuery({
    filter: {
      ...(category ? { category: { slug: category } } : {}),
      ...(tags ? { tags } : {}),
      type: {
        _eq: "post",
      },
    },
    limit,
    fields: ["*", "thumbnail.*", "category.*"],
  });
  return posts;
}

export function getPost(slug) {
  return directus
    .items("posts")
    .readByQuery({ limit: 1, filter: { slug, type: { _eq: "post" } } });
}

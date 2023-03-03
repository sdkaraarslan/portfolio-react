import { directus } from "../lib/directus";

export async function getAboutMe() {
  return directus.items("about_me").readByQuery({});
}

export async function getTags() {
  return directus.items("tags").readByQuery({});
}

export async function getCategories() {
  return directus.items("categories").readByQuery({});
}

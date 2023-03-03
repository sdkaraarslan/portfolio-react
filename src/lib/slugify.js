import slugifyFromLib from "slugify";

export const slugify = (text) => {
  return slugifyFromLib(text, { lower: true });
};

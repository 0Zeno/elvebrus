import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

const TEXT_BLOCK_QUERY = defineQuery(`
*[_type == "textBlock" && block == $block][0]{
  block,
  text
}
`);

export const getTextBlock = async (block: string) => {
  return await sanityFetch({ query: TEXT_BLOCK_QUERY, params: { block } });
};

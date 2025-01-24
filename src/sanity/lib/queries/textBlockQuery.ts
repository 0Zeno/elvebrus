import { defineQuery } from "next-sanity";
import { client } from "../client";

const TEXT_BLOCK_QUERY = defineQuery(`
*[_type == "textBlock" && block == $block][0]{
  block,
  text
}
`);

export const getTextBlock = async (block: string) => {
  return await client.fetch(TEXT_BLOCK_QUERY, { block });
};

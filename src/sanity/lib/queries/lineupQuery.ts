import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";

const CURRENT_YEAR_LINEUP_QUERY =
  defineQuery(`*[_type == "lineup"] | order(year desc){
  year,
  artists[]->{
    _id,
    name,
    image {
    asset->
    }
  }
}[0]`);

export function getCurrentYearLienup() {
  return sanityFetch({ query: CURRENT_YEAR_LINEUP_QUERY });
}

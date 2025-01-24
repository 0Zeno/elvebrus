import { defineQuery } from "next-sanity";
import { client } from "../client";

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
  return client.fetch(CURRENT_YEAR_LINEUP_QUERY);
}

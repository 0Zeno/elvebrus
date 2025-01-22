import { defineQuery } from "next-sanity";
import { client } from "../client";

const PREVIUS_YEARS_QUERY = defineQuery(`
  *[_type == "previusYear"] | order(year desc) {
    _id,
    year,
    "slug" : slug.current,
    lineup->{
      artists[]->{
        _id,
        name,
        image {
          asset->
        }
      }
    },
    images[] {
      asset->
    }
  }
`);

export async function getPreviusYears() {
  return client.fetch(PREVIUS_YEARS_QUERY);
}

const YEAR_BY_SLUG_QUERY = defineQuery(`
*[_type == "previusYear" && slug.current == $slug][0] {
    _id,
    year,
    "slug": slug.current,
    lineup->{
      artists[]->{
        _id,
        name,
        image {
          asset->
        }
      }
    },
    images[] {
      asset->
    }
  }
`);

export const getPreviousYearBySlug = async (slug: string) => {
  return await client.fetch(YEAR_BY_SLUG_QUERY, { slug });
};

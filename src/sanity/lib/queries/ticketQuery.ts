import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

const TICKET_QUERY = defineQuery(`*[_type == "ticket"] {
    _id,
    title,
    price,
    link,
    release,
    }`);

export function getTickets() {
  return sanityFetch({ query: TICKET_QUERY });
}

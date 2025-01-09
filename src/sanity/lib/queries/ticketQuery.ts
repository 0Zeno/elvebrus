import { defineQuery } from "next-sanity";
import { client } from "../client";

const TICKET_QUERY = defineQuery(`*[_type == "ticket"] {
    _id,
    title,
    price,
    link
    }`);

export function getTickets() {
  return client.fetch(TICKET_QUERY);
}

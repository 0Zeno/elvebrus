import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { ticketType } from "./ticketType";
import { artistProfileType } from "./artistProfileType";
import { lineupType } from "./lineupType";
import { previusYears } from "./previusYears";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, ticketType, artistProfileType, lineupType, previusYears],
};

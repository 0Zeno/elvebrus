import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { authorType } from "./authorType";
import { ticketType } from "./ticketType";
import { artistProfileType } from "./artistProfileType";
import { lineupType } from "./lineupType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, authorType, ticketType, artistProfileType, lineupType],
};

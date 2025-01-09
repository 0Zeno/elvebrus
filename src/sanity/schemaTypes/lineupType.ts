import { defineField, defineType } from "sanity";

export const lineupType = defineType({
  name: "lineup",
  title: "Lineup",
  type: "document",
  fields: [
    defineField({
      name: "year",
      title: "Året lineupen spiller",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "artists",
      title: "artister",
      type: "array",
      validation: (Rule) => Rule.required(),
      of: [
        {
          title: "artist",
          name: "Artist",
          type: "reference",
          to: [{ type: "artistProfile" }],
          validation: (Rule) => Rule.required(),
        },
      ],
    }),
  ],
});

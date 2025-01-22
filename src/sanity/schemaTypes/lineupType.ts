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
      title: "Artister",
      type: "array",
      validation: (Rule) => Rule.required(),
      of: [
        {
          name: "artist",
          title: "Artist",
          type: "reference",
          to: [{ type: "artistProfile" }],
          validation: (Rule) => Rule.required().min(1),
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'year',
    }
  },
});

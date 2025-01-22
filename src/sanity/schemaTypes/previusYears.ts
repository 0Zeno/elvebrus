import { defineField, defineType } from "sanity";

export const previusYears = defineType({
  name: "previusYear",
  title: "Tidligere år",
  type: "document",
  validation: (Rule) => Rule.required(),
  fields: [
    defineField({
      name: "year",
      title: "år",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "year",
        slugify: (input) => input.toString(),
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "lineup",
      title: "Linupen det året",
      type: "reference",
      to: [{ type: "lineup" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "images",
      title: "Bilder fra året",
      type: "array",
      validation: (Rule) => Rule.required().min(1),
      of: [
        defineField({
          name: "image",
          title: "Bilde",
          type: "image",
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "year",
    },
  },
});

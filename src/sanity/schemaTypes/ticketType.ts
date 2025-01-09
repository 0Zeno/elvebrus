import { defineField, defineType } from "sanity";

export const ticketType = defineType({
  name: "ticket",
  title: "Billeter",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Typen til biletten",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "price",
      title: "Prisen til biletten",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "link",
      title: "Lenke til bilettjenesten",
      type: "url",
      validation: (Rule) => Rule.required(),
    }),
  ],
});

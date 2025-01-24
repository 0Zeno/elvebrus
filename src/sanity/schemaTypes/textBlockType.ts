import { defineField, defineType } from "sanity";

export const textBlock = defineType({
  name: "textBlock",
  title: "Undersider og textbokser",
  type: "document",
  fields: [
    defineField({
      name: "block",
      title: "name",
      type: "string",
    }),
    defineField({
      name: "text",
      title: "Informasjon",
      type: "blockContent",
      validation: (Rule) => Rule.required(),
    }),
  ],
});

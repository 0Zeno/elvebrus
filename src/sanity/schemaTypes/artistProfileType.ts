import { defineField, defineType } from "sanity";

export const artistProfileType = defineType({
  name: "artistProfile",
  title: "Artist profil",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Navnet til artisten",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Bilde av artisten, slik som dere poster på instagram",
      type: "image",
      validation: (Rule) => Rule.required(),  
    }),
  ],
});

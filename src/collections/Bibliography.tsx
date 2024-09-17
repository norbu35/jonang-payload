import { CollectionConfig } from "payload/types";

const Bibliography: CollectionConfig = {
  slug: "bibliogrpahy",
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "subtitle",
      type: "text",
    },
    {
      name: "year",
      type: "number",
    },
    {
      name: "publisher",
      type: "text",
    },
    {
      name: "cover",
      type: "text",
      admin: {
        description: "Provide a URL to an image of the book cover.",
      },
    },
    {
      name: "link",
      type: "text",
      admin: {
        description: "Provide a link for buying the book.",
      },
    },
  ],
};

export default Bibliography;

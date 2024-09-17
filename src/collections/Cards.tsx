import { CollectionConfig } from "payload/types";

const Card: CollectionConfig = {
  slug: "cards",
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "header",
  },
  fields: [
    {
      name: "header",
      type: "text",
      required: true,
      maxLength: 50,
      admin: {
        description: ({ path, value }) =>
          `${
            typeof value === "string" ? 50 - value.length : "50"
          } characters left.`,
      },
    },
    {
      name: "body",
      type: "text",
      required: true,
      maxLength: 120,
      admin: {
        description: ({ path, value }) =>
          `${
            typeof value === "string" ? 120 - value.length : "120"
          } characters left.`,
      },
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "link",
      type: "relationship",
      relationTo: "pages",
      required: true,
    },
  ],
};

export default Card;

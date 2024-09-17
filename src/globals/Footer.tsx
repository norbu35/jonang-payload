import {
  HTMLConverterFeature,
  lexicalEditor,
  lexicalHTML,
} from "@payloadcms/richtext-lexical";
import { CollectionConfig } from "payload/types";

const Footer: CollectionConfig = {
  slug: "footer",
  access: {
    read: () => true,
  },
  admin: {
    description:
      "Part of the website which appears at the bottom, and contains contact info, legal info, and possibly links for ease of access.",
  },
  fields: [
    {
      name: "address",
      type: "richText",
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          HTMLConverterFeature({}),
        ],
      }),
    },
    {
      name: "email",
      type: "text",
    },
    {
      name: "phone",
      type: "text",
    },
    {
      name: "blessing",
      type: "text",
    },
    lexicalHTML("address", { name: "addressHtml" }),
  ],
};

export default Footer;

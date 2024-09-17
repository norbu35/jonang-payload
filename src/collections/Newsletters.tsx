import {
  HTMLConverterFeature,
  lexicalEditor,
  lexicalHTML,
} from "@payloadcms/richtext-lexical";
import { CollectionConfig } from "payload/types";
import { sendNewsletter } from "../hooks/sendNewsletter";

const Newsletters: CollectionConfig = {
  slug: "newsletters",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "body",
      type: "richText",
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          HTMLConverterFeature({}),
        ],
      }),
    },
    lexicalHTML("body", { name: "bodyHtml" }),
  ],
  hooks: {
    afterChange: [sendNewsletter],
  },
};

export default Newsletters;

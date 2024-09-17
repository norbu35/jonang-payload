import {
  HTMLConverterFeature,
  lexicalEditor,
  lexicalHTML,
} from "@payloadcms/richtext-lexical";
import { GlobalConfig } from "payload/types";

const Activities: GlobalConfig = {
  slug: "activities",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "description",
      type: "richText",
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          HTMLConverterFeature({}),
        ],
      }),
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    lexicalHTML("description", { name: "descriptionHtml" }),
  ],
};

export default Activities;

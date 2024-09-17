import { GlobalConfig } from "payload/types";

const IntroText: GlobalConfig = {
  slug: "introText",
  access: {
    read: () => true,
  },
  admin: {
    description: "The first introductory body of text.",
  },
  fields: [
    {
      name: "body",
      type: "textarea",
      required: true,
    },
    {
      name: "buttonLink",
      type: "relationship",
      relationTo: "pages",
      required: true,
      admin: {
        description: "A page which the button below the text should lead to.",
      },
    },
  ],
};

export default IntroText;

import { GlobalConfig } from "payload/types";

const SiteTitle: GlobalConfig = {
  slug: "siteTitle",
  access: {
    read: () => true,
  },
  admin: {
    description: "The main title of the website which appears at the top.",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      maxLength: 60,
      admin: {
        description: ({ path, value }) =>
          `${
            typeof value === "string" ? 60 - value.length : "60"
          } characters left.`,
      },
    },
    {
      name: "secondaryTitle",
      type: "text",
    },
    {
      name: "logo",
      type: "upload",
      relationTo: "media",
    },
    {
      name: "subheading",
      type: "text",
    },
  ],
};

export default SiteTitle;

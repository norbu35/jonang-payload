import { GlobalConfig } from "payload/types";

const Prominence: GlobalConfig = {
  slug: "prominence",
  access: {
    read: () => true,
  },
  admin: {
    description:
      "A photo of and a body of text about a prominent person, appearing directly after the introductory text.",
  },
  fields: [
    {
      name: "photo",
      type: "upload",
      relationTo: "portraits",
      required: true,
    },
    {
      name: "photoCaption",
      type: "text",
      required: true,
      admin: {
        description:
          "A caption to go under the photo, good for stating the title of the prominent person.",
      },
    },
    {
      name: "mainText",
      type: "textarea",
      required: true,
      admin: {
        description:
          "A larger body of text, which for example can be a short biography or a quote made by the prominent person.",
      },
    },
    {
      name: "isQuote",
      label: "Text is a quote",
      type: "checkbox",
      defaultValue: false,
      admin: {
        description:
          "Check this box if the text is a quote, and you want to add a quote source.",
      },
    },
    {
      name: "quoteSource",
      type: "text",
      required: true,
      admin: {
        condition: (data) => data.isQuote,
        description: "A citation which will appear under the quote.",
      },
    },
  ],
};

export default Prominence;

import { CollectionConfig } from "payload/types";

const Donations: CollectionConfig = {
  slug: "donations",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "headline",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      required: true,
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "goal",
      type: "number",
      required: true,
    },
  ],
};

export default Donations;

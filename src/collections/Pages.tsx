import {
  HeadingFeature,
  HTMLConverterFeature,
  lexicalEditor,
  lexicalHTML,
} from "@payloadcms/richtext-lexical";
import { CollectionConfig } from "payload/types";
import React from "react";

const Pages: CollectionConfig = {
  slug: "pages",
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "slug",
      type: "text",
      admin: {
        description: () => (
          <div>
            All pages on the website will start with the address{" "}
            <em>www.jonang.in</em> and then followed by the <b>slug</b>{" "}
            of the page. The slug:
            <ul>
              <li>
                Is all small letters
              </li>
              <li>
                Contains dashes instead of spaces
              </li>
              <li>
                Has a forward slash (/) between every subpage
              </li>
            </ul>
            <i>
              <b>Example</b>: If you're creating an 'About Us' page, the slug
              (<u>
                underlined
              </u>) will be: jonang.in/<u>about-us</u>. If you're creating an
              'Our History' page, which is <b>subpage to</b>{" "}
              'About Us', the slug will be: jonang.in/<u>
                about-us/our-history
              </u>. Note the <b>/</b>{" "}
              between the page about-us and its subpage our-history.
            </i>
          </div>
        ),
      },
      required: true,
    },
    {
      name: "title",
      type: "text",
      admin: {
        description: "The title will be shown on top of the page as a heading.",
      },
      required: true,
    },
    {
      name: "content",
      type: "richText",
      required: true,
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          HeadingFeature({
            enabledHeadingSizes: ["h2", "h3", "h4", "h5", "h6"],
          }),
          HTMLConverterFeature({}),
        ],
      }),
    },
    lexicalHTML("content", { name: "contentHtml" }),
  ],
};

export default Pages;

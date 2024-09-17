import React from "react";
import { GlobalConfig } from "payload/types";

const Header: GlobalConfig = {
  slug: "header",
  access: {
    read: () => true,
  },
  admin: {
    description:
      "The part of the website which appears at the top (for desktop computers) or at the bottom of the screen (for mobile phones) and contains the logo and the navigation links.",
  },
  fields: [
    {
      name: "navigation",
      type: "array",
      required: true,
      maxRows: 6,
      fields: [
        {
          name: "navigationType",
          type: "radio",
          options: [
            {
              label: "Page",
              value: "page",
            },
            {
              label: "Label",
              value: "label",
            },
            {
              label: "External Link",
              value: "link",
            },
          ],
          defaultValue: "page",
          admin: {
            description: () => (
              <div>
                Page: choose a page on this website to link to.
                <br />
                Label: create a label which doesn't link to anything, but which
                opens a dropdown submenu containing links.
                <br />
                External link: link to an external website.
                <br />
              </div>
            ),
          },
        },
        {
          name: "page",
          type: "relationship",
          relationTo: "pages",
          required: true,
          admin: {
            description: "Select the page to link to.",
            condition: (_, siblingData) =>
              siblingData.navigationType === "page",
          },
        },
        {
          name: "label",
          type: "text",
          required: true,
          admin: {
            description:
              "Provide the label which will appear in the navigation menu.",
            condition: (_, siblingData) =>
              siblingData.navigationType === "label",
          },
        },
        {
          name: "linkLabel",
          type: "text",
          required: true,
          admin: {
            description:
              "Provide a label which will be used to show the link in the menu.",
            condition: (_, siblingData) =>
              siblingData.navigationType === "link",
          },
        },
        {
          name: "url",
          label: "URL",
          type: "text",
          required: true,
          admin: {
            description: () => (
              <div>
                Provide a{" "}
                <a
                  href="https://www.hostinger.com/tutorials/what-is-a-url#What_Is_an_Example_of_a_URL_Address"
                  target="_blank"
                >
                  full URL to the website.
                </a>
              </div>
            ),
            condition: (_, siblingData) =>
              siblingData.navigationType === "link",
          },
        },
        {
          name: "sublinks",
          type: "array",
          admin: {
            description:
              "If the navigation item should have a dropdown submenu which contains more links, add them here. The submenu appears on hover (desktop) or by clicking an expand button (mobile).",
          },
          fields: [
            {
              name: "navigationType",
              type: "radio",
              options: [
                {
                  label: "Page",
                  value: "page",
                },
                {
                  label: "External Link",
                  value: "link",
                },
              ],
              defaultValue: "page",
            },
            {
              name: "page",
              type: "relationship",
              relationTo: "pages",
              required: true,
              admin: {
                description: "Select the page to link to.",
                condition: (_, siblingData) =>
                  siblingData.navigationType === "page",
              },
            },
            {
              name: "linkLabel",
              type: "text",
              required: true,
              admin: {
                condition: (_, siblingData) =>
                  siblingData.navigationType === "link",
              },
            },
            {
              name: "url",
              label: "URL",
              type: "text",
              required: true,
              admin: {
                description: () => (
                  <div>
                    Provide a{" "}
                    <a
                      href="https://www.hostinger.com/tutorials/what-is-a-url#What_Is_an_Example_of_a_URL_Address"
                      target="_blank"
                    >
                      full URL to the website.
                    </a>
                  </div>
                ),
                condition: (_, siblingData) =>
                  siblingData.navigationType === "link",
              },
            },
          ],
        },
      ],
      admin: {
        description:
          "Each navigation item can be a link on click, a link on click and also expand on hover (desktop) or expand by button (mobile), or just a label which doesn't link but expands.",
      },
    },
    {
      name: "logo",
      type: "upload",
      relationTo: "media",
      required: true,
      admin: {
        description: "The logo which appears on the left side of the Header.",
      },
    },
  ],
};

export default Header;

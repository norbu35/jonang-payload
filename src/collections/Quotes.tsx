import React from "react";
import { CollectionConfig } from "payload/types";
import {
  HTMLConverterFeature,
  lexicalEditor,
  lexicalHTML,
} from "@payloadcms/richtext-lexical";

const Quotes: CollectionConfig = {
  slug: "quotes",
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      admin: {
        description: "A short label to show as the name of the quote.",
      },
    },
    {
      name: "quote",
      type: "richText",
      required: true,
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          HTMLConverterFeature({}),
        ],
      }),
    },
    lexicalHTML("quote", { name: "quoteHtml" }),
    {
      name: "addSourceLanguage",
      type: "checkbox",
      label: "Quote in source language",
      admin: {
        description:
          "Check this box to enable adding the quote in its source language.",
      },
    },
    {
      name: "originalQuote",
      type: "richText",
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          HTMLConverterFeature({}),
        ],
      }),
      admin: {
        condition: (data) => data.addSourceLanguage,
      },
    },
    lexicalHTML("originalQuote", { name: "originalQuoteHtml" }),
    {
      name: "originalQuoteLang",
      type: "text",
      label: "Original quote language",
      required: true,
      admin: {
        condition: (data) => data.addSourceLanguage,
        description: () => (
          <div>
            A{" "}
            <a
              href="https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes"
              target="_blank"
            >
              two-letter language code
            </a>{" "}
            denoting the language of the source quote.{" "}
            <i>Examples: English: en, Tibetan: bo, Pali: pi</i>
          </div>
        ),
      },
    },
    {
      name: "source",
      type: "text",
    },
  ],
};

export default Quotes;

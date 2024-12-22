import type { CollectionConfig } from 'payload'
import { HTMLConverterFeature, lexicalEditor, lexicalHTML } from '@payloadcms/richtext-lexical'
import { authenticated } from '../access/authenticated'

const Quotes: CollectionConfig = {
  slug: 'quotes',
  access: {
    create: authenticated,
    read: () => true,
    update: authenticated,
    delete: authenticated,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        description: 'A short label to show as the name of the quote.',
      },
    },
    {
      name: 'quote',
      type: 'richText',
      required: true,
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [...defaultFeatures, HTMLConverterFeature({})],
      }),
    },
    lexicalHTML('quote', { name: 'quoteHtml' }),
    {
      name: 'addSourceLanguage',
      type: 'checkbox',
      label: 'Quote in source language',
      admin: {
        description: 'Check this box to enable adding the quote in its source language.',
      },
    },
    {
      name: 'originalQuote',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [...defaultFeatures, HTMLConverterFeature({})],
      }),
      admin: {
        condition: (data) => data.addSourceLanguage,
      },
    },
    lexicalHTML('originalQuote', { name: 'originalQuoteHtml' }),
    {
      name: 'originalQuoteLang',
      type: 'text',
      label: 'Original quote language',
      required: true,
      admin: {
        condition: (data) => data.addSourceLanguage,
        description: 'Two-letter ISO language code of the source language',
      },
    },
    {
      name: 'source',
      type: 'text',
    },
  ],
}

export default Quotes

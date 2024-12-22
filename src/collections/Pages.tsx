import { HTMLConverterFeature, lexicalEditor, lexicalHTML } from '@payloadcms/richtext-lexical'
import { authenticated } from '../access/authenticated'
import type { CollectionConfig } from 'payload'

const Pages: CollectionConfig = {
  slug: 'pages',
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
      name: 'slug',
      type: 'text',
      admin: {
        description: 'A short web address slug',
      },
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      admin: {
        description: 'The title will be shown on top of the page as a heading.',
      },
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [...defaultFeatures, HTMLConverterFeature({})],
      }),
    },
    lexicalHTML('content', { name: 'contentHtml' }),
  ],
}

export default Pages

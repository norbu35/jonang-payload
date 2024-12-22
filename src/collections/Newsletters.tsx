import { HTMLConverterFeature, lexicalEditor, lexicalHTML } from '@payloadcms/richtext-lexical'
import type { CollectionConfig } from 'payload'
import { sendNewsletter } from '../hooks/sendNewsletter'
import { authenticated } from '../access/authenticated'

const Newsletters: CollectionConfig = {
  slug: 'newsletters',
  access: {
    create: authenticated,
    read: () => true,
    update: authenticated,
    delete: authenticated,
  },
  fields: [
    {
      name: 'body',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [...defaultFeatures, HTMLConverterFeature({})],
      }),
    },
    lexicalHTML('body', { name: 'bodyHtml' }),
  ],
  hooks: {
    afterChange: [sendNewsletter],
  },
}

export default Newsletters

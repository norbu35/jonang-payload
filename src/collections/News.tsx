import type { CollectionConfig } from 'payload'
import { authenticated } from '../access/authenticated'
import { HTMLConverterFeature, lexicalEditor, lexicalHTML } from '@payloadcms/richtext-lexical'

const News: CollectionConfig = {
  slug: 'news',
  access: {
    create: authenticated,
    read: () => true,
    update: authenticated,
    delete: authenticated,
  },
  admin: {
    useAsTitle: 'headline',
  },
  fields: [
    {
      name: 'slug',
      type: 'text',
      required: true,
    },
    {
      name: 'headline',
      type: 'text',
      required: true,
    },
    {
      name: 'body',
      type: 'richText',
      required: true,
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [...defaultFeatures, HTMLConverterFeature({})],
      }),
    },
    {
      name: 'image',
      type: 'upload',
      required: true,
      relationTo: 'media',
    },
    lexicalHTML('body', { name: 'bodyHtml' }),
  ],
}

export default News

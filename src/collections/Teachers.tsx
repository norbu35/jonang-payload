import type { CollectionConfig } from 'payload'
import { HTMLConverterFeature, lexicalEditor, lexicalHTML } from '@payloadcms/richtext-lexical'
import { authenticated } from '../access/authenticated'

const Teachers: CollectionConfig = {
  slug: 'teachers',
  access: {
    create: authenticated,
    read: () => true,
    update: authenticated,
    delete: authenticated,
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'orderOfAppearance',
          type: 'number',
          required: true,
          admin: {
            description: 'The order in which the teacher appears, lower number comes first.',
          },
        },
      ],
    },
    {
      name: 'roles',
      type: 'array',
      required: true,
      admin: {
        description: 'Role of the teacher at the monastery.',
      },
      fields: [
        {
          name: 'role',
          type: 'text',
        },
      ],
    },
    {
      name: 'portrait',
      type: 'upload',
      required: true,
      relationTo: 'portraits',
    },
    {
      name: 'bio',
      type: 'richText',
      required: true,
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [...defaultFeatures, HTMLConverterFeature({})],
      }),
    },
    lexicalHTML('bio', { name: 'bioHtml' }),
  ],
}

export default Teachers

import type { CollectionConfig } from 'payload'
import { authenticated } from '../access/authenticated'

const Bibliography: CollectionConfig = {
  slug: 'bibliogrpahy',
  access: {
    create: authenticated,
    read: () => true,
    update: authenticated,
    delete: authenticated,
  },
  admin: {
    useAsTitle: '',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'text',
    },
    {
      name: 'year',
      type: 'number',
    },
    {
      name: 'publisher',
      type: 'text',
    },
    {
      name: 'cover',
      type: 'text',
      admin: {
        description: 'Provide a URL to an image of the book cover.',
      },
    },
    {
      name: 'link',
      type: 'text',
      admin: {
        description: 'Provide a link for buying the book.',
      },
    },
  ],
}

export default Bibliography

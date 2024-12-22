import type { CollectionConfig } from 'payload'
import { authenticated } from '../access/authenticated'

const Card: CollectionConfig = {
  slug: 'cards',
  access: {
    create: authenticated,
    read: () => true,
    update: authenticated,
    delete: authenticated,
  },
  admin: {
    useAsTitle: 'header',
  },
  fields: [
    {
      name: 'header',
      type: 'text',
      required: true,
      maxLength: 50,
    },
    {
      name: 'body',
      type: 'text',
      required: true,
      maxLength: 120,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'link',
      type: 'relationship',
      relationTo: 'pages',
      required: true,
    },
  ],
}

export default Card

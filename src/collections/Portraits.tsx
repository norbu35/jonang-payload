import type { CollectionConfig } from 'payload'
import { authenticated } from '../access/authenticated'

const Portraits: CollectionConfig = {
  slug: 'portraits',
  access: {
    create: authenticated,
    read: () => true,
    update: authenticated,
    delete: authenticated,
  },
  admin: {
    useAsTitle: 'alt',
  },
  upload: {
    staticDir: './uploads/portraits',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'centre',
      },
      {
        name: 'card',
        width: 768,
        height: 1024,
        position: 'centre',
      },
      {
        name: 'tablet',
        width: 1024,
        height: undefined,
        position: 'centre',
      },
    ],
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*'],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
      admin: {
        description: 'The name of the person, to be used as a label for the image.',
      },
    },
  ],
}

export default Portraits

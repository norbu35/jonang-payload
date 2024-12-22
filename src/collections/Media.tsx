import type { CollectionConfig } from 'payload'
import { authenticated } from '../access/authenticated'

const Media: CollectionConfig = {
  slug: 'media',
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
    staticDir: './uploads/media',
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
        description:
          "A text describing the image, for screen readers and in cases where the image can't be rendered. Also used as a descriptor for images on the CMS.",
      },
    },
  ],
}

export default Media

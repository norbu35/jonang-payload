import type { CollectionConfig } from 'payload'
import { authenticated } from '../access/authenticated'

const Donations: CollectionConfig = {
  slug: 'donations',
  access: {
    create: authenticated,
    read: () => true,
    update: authenticated,
    delete: authenticated,
  },
  fields: [
    {
      name: 'headline',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'goal',
      type: 'number',
      required: true,
    },
  ],
}

export default Donations

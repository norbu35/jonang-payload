import type { GlobalConfig } from 'payload'

const SiteTitle: GlobalConfig = {
  slug: 'siteTitle',
  access: {
    read: () => true,
  },
  admin: {
    description: 'The main title of the website which appears at the top.',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      maxLength: 60,
    },
    {
      name: 'secondaryTitle',
      type: 'text',
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'subheading',
      type: 'text',
    },
  ],
}

export default SiteTitle

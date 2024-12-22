import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import { seoPlugin } from '@payloadcms/plugin-seo'

import path from 'path'
import sharp from 'sharp'

import Users from './collections/Users'
import Pages from './collections/Pages'
import Quotes from './collections/Quotes'
import Cards from './collections/Cards'
import Media from './collections/Media'
import Portraits from './collections/Portraits'
import Teachers from './collections/Teachers'
import News from './collections/News'
import Donations from './collections/Donations'
import Newsletters from './collections/Newsletters'
import Header from './globals/Header'
import SiteTitle from './globals/SiteTitle'
import IntroText from './globals/IntroText'
import Prominence from './globals/Prominence'
import Activities from './globals/Activities'
import Footer from './globals/Footer'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    livePreview: {
      url: `${process.env.PAYLOAD_PUBLIC_SERVER_URL}:${process.env.LIVE_PREVIEW_PORT}`,
      collections: ['newsletters', 'pages'],
    },
    components: {
      actions: [
        {
          path: 'src/components/PublishButton',
          exportName: 'PublishButton',
        },
      ],
    },
  },
  endpoints: [
    {
      path: '/publish',
      method: 'post',
      handler: async (req) => {
        const webhookUrl = process.env.NETLIFY_WEBHOOK_URL

        if (!webhookUrl) {
          throw new Error('webhook URL is not configured.')
        }

        const response = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(req.body),
        })

        if (!response.ok) {
          return Response.json({
            error: `Non success response from Netlify: ${response.body}`,
            status: 500,
          })
        }

        return Response.json({ message: 'Webhook triggered successfully', status: 200 })
      },
    },
  ],
  editor: lexicalEditor(),
  globals: [Header, SiteTitle, IntroText, Prominence, Activities, Footer],
  collections: [
    Users,
    Media,
    Portraits,
    Pages,
    Newsletters,
    News,
    Teachers,
    Cards,
    Donations,
    Quotes,
  ],
  secret: process.env.PAYLOAD_SECRET || '',
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  cors: [process.env.PAYLOAD_PUBLIC_SERVER_URL || ''].filter(Boolean),
  csrf: [process.env.PAYLOAD_PUBLIC_SERVER_URL || ''].filter(Boolean),
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    seoPlugin({
      tabbedUI: true,
      collections: ['pages'],
      uploadsCollection: 'media',
      generateTitle: ({ doc }) => `Jonang Monastery | ${doc?.title?.value}`,
      generateDescription: ({ doc }) => doc?.excerpt?.value,
      generateURL: ({ doc }) =>
        `${process.env.WEBSITE_URL}/${doc.collection?.slug}/${doc?.slug?.value}`,
    }),
  ],
  graphQL: {
    disable: true,
  },
  upload: {
    limits: {
      fileSize: 3000000,
    },
  },
})

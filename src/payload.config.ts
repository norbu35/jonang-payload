// @ts-nocheck
import path from "path";

import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { viteBundler } from "@payloadcms/bundler-vite";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { buildConfig } from "payload/config";
import seoPlugin from "@payloadcms/plugin-seo";

import Users from "./collections/Users";
import Pages from "./collections/Pages";
import Quotes from "./collections/Quotes";
import Cards from "./collections/Cards";
import Media from "./collections/Media";
import Portraits from "./collections/Portraits";
import Teachers from "./collections/Teachers";
import News from "./collections/News";
import Donations from "./collections/Donations";
import Newsletters from "./collections/Newsletters";
import Header from "./globals/Header";
import SiteTitle from "./globals/SiteTitle";
import IntroText from "./globals/IntroText";
import Prominence from "./globals/Prominence";
import Activities from "./globals/Activities";
import Footer from "./globals/Footer";
import PublishButton from "./components/PublishButton";

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
    livePreview: {
      url: `${process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost'}:${process.env.LIVE_PREVIEW_PORT || 3000}`,
      collections: ["newsletters", "pages"],
    },
    components: {
      actions: [PublishButton],
    },
  },
  editor: lexicalEditor({}),
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
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost',
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
  plugins: [
    seoPlugin({
      tabbedUI: true,
      collections: ["pages"],
      uploadsCollection: "media",
      generateTitle: ({ doc }) => `Jonang Monastery | ${doc?.title?.value}`,
      generateDescription: ({ doc }) => doc?.excerpt?.value,
      generateURL: ({ doc }) =>
        `https://jonang.in/${collection?.slug}/${doc?.slug?.value}`,
    }),
  ],
  rateLimit: {
    max: 1000,
    trustProxy: true,
  },
  cors: [process.env.PAYLOAD_PUBLIC_SERVER_URL || ''].filter(Boolean),
  csrf: [process.env.PAYLOAD_PUBLIC_SERVER_URL || ''].filter(Boolean),
  graphQL: {
    disable: true,
  },
  upload: {
    limits: {
      fileSize: 3000000,
    },
  },
});

# Jonang Payload Project

## Project Overview

The Jonang Payload project is a web application built with [Payload CMS](https://payloadcms.com/) version 3.0 and Next.js 15. It serves as a content management platform for the Jonang Monastery, likely to manage and present information about Tibetan Buddhism teachings, events, and community activities.

The project follows the Payload v3 architecture with a Next.js front-end and MongoDB as the database backend. It includes various collections for managing different types of content such as pages, news, teachers, portraits, donations, and newsletters. The project uses the Lexical rich text editor and includes SEO plugin integration.

### Key Technologies

- **Framework**: Next.js 15 (App Router)
- **CMS**: Payload CMS v3 (latest)
- **Database**: MongoDB (via @payloadcms/db-mongodb adapter)
- **Rich Text Editor**: Lexical (via @payloadcms/richtext-lexical)
- **Styling**: Tailwind CSS (inferred from typical Payload setup)
- **Language**: TypeScript
- **Deployment**: Docker containerized application

### Architecture

- **Frontend**: Next.js 15 with Payload integration
- **Backend**: Payload CMS API layer
- **Database**: MongoDB
- **File Storage**: Local disk storage for media files
- **Authentication**: Built-in Payload authentication system

## Collections

The project defines several content collections:

- **Users**: User authentication and management
- **Media**: File storage and management
- **Portraits**: Likely images/portraits of important figures
- **Pages**: Website pages with rich text content
- **Newsletters**: Newsletter content management
- **News**: News articles and updates
- **Teachers**: Information about Buddhist teachers
- **Cards**: Card-based content elements
- **Donations**: Donation-related information
- **Quotes**: Spiritual quotes or teachings
- **Bibliography**: References and resources

## Globals

Global content sections include:

- **Header**: Site header configuration
- **SiteTitle**: Overall site title
- **IntroText**: Introduction text for the homepage
- **Prominence**: Prominent content section
- **Activities**: Activities section
- **Footer**: Site footer configuration

## Building and Running

### Prerequisites

- Node.js (version ^18.20.2 || >=20.9.0)
- MongoDB instance (local or cloud)
- Docker (for containerized deployment)

### Development Setup

1. **Install Dependencies**
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

2. **Environment Configuration**
   Create a `.env` file based on the variables referenced in `compose.yaml`:
   ```env
   PAYLOAD_SECRET=your-secret-key
   PAYLOAD_PUBLIC_SERVER_URL=http://localhost:3000
   PORT=3000
   DATABASE_URI=mongodb://localhost:27017/jonang-payload
   LIVE_PREVIEW_PORT=3000
   WEBSITE_URL=http://localhost:3000
   NODE_OPTIONS=--no-deprecation
   NETLIFY_WEBHOOK_URL=your-netlify-webhook-url (optional)
   ```

3. **Run in Development Mode**
   ```bash
   npm run dev
   # or
   pnpm dev
   # or
   yarn dev
   ```

4. **Build for Production**
   ```bash
   npm run build
   # or
   pnpm build
   # or
   yarn build
   ```

5. **Start Production Server**
   ```bash
   npm run start
   # or
   pnpm start
   # or
   yarn start
   ```

6. **Generate Types**
   ```bash
   npm run generate:types
   # or
   pnpm generate:types
   # or
   yarn generate:types
   ```

### Docker Deployment

The project includes both a Dockerfile and compose.yaml for containerized deployment:

1. **Build and Run with Docker Compose**
   ```bash
   docker-compose up --build
   ```

2. **Alternative Docker Commands**
   ```bash
   # Build the image
   docker build -t jonang-payload .
   
   # Run the container
   docker run -p 3000:3000 jonang-payload
   ```

## Development Conventions

### Code Structure

- `/src/app` - Next.js app router pages and layouts
- `/src/collections` - Payload collection configurations
- `/src/globals` - Global content configurations
- `/src/components` - React components
- `/src/access` - Access control functions
- `/src/hooks` - Custom React hooks
- `/src/templates` - Page templates
- `payload.config.ts` - Main Payload configuration
- `next.config.mjs` - Next.js configuration with Payload integration

### Naming Conventions

- Collection slugs follow kebab-case convention (e.g., 'users', 'news')
- Component files use PascalCase (e.g., `ComponentName.tsx`)
- Utility functions use camelCase
- Environment variables use SCREAMING_SNAKE_CASE

### Data Modeling

Each collection follows Payload's CollectionConfig interface with:
- Unique slug for identification
- Access controls defined
- Rich field definitions with validation
- Admin configuration for UI presentation

## Special Features

1. **Netlify Integration**: The application includes an endpoint (`/publish`) that triggers a webhook to Netlify for automatic deployments.

2. **SEO Plugin**: Integrated SEO plugin with custom title, description, and URL generation functions.

3. **Live Preview**: Configured live preview functionality for newsletters and pages.

4. **Custom Actions**: Includes a custom publish button component in the admin panel.

5. **File Upload Limits**: Configured with 3MB file size limits for uploads.

6. **Authentication Protection**: Various collections and operations are protected with authentication requirements.

## Project Purpose

Based on the project name "jonang-payload" and the presence of collections for teachers, portraits, and spiritual content like quotes and bibliography, this appears to be a website for the Jonang tradition of Tibetan Buddhism. The Jonang monastery would use this platform to share teachings, maintain a community of practitioners, and provide educational resources about the Jonang school of Tibetan Buddhism.
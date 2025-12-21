# Jonang Payload Project Overview

## Purpose
The Jonang Payload project is a web application built with Payload CMS version 3.0 and Next.js 15. It serves as a content management platform for the Jonang Monastery, managing and presenting information about Tibetan Buddhism teachings, events, and community activities.

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **CMS**: Payload CMS v3 (latest)
- **Database**: MongoDB (via @payloadcms/db-mongodb adapter)
- **Rich Text Editor**: Lexical (via @payloadcms/richtext-lexical)
- **Styling**: Tailwind CSS (inferred from typical Payload setup)
- **Language**: TypeScript
- **Deployment**: Docker containerized application

## Architecture
- **Frontend**: Next.js 15 with Payload integration
- **Backend**: Payload CMS API layer
- **Database**: MongoDB
- **File Storage**: Local disk storage for media files
- **Authentication**: Built-in Payload authentication system

## Collections
- **Users**: User authentication and management
- **Media**: File storage and management
- **Portraits**: Images/portraits of important figures
- **Pages**: Website pages with rich text content
- **Newsletters**: Newsletter content management
- **News**: News articles and updates
- **Teachers**: Information about Buddhist teachers
- **Cards**: Card-based content elements
- **Donations**: Donation-related information
- **Quotes**: Spiritual quotes or teachings
- **Bibliography**: References and resources

## Globals
- **Header**: Site header configuration
- **SiteTitle**: Overall site title
- **IntroText**: Introduction text for the homepage
- **Prominence**: Prominent content section
- **Activities**: Activities section
- **Footer**: Site footer configuration

## Special Features
1. **Netlify Integration**: The application includes an endpoint (`/publish`) that triggers a webhook to Netlify for automatic deployments.
2. **SEO Plugin**: Integrated SEO plugin with custom title, description, and URL generation functions.
3. **Live Preview**: Configured live preview functionality for newsletters and pages.
4. **Custom Actions**: Includes a custom publish button component in the admin panel.
5. **File Upload Limits**: Configured with 3MB file size limits for uploads.
6. **Authentication Protection**: Various collections and operations are protected with authentication requirements.
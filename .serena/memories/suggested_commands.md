# Development Tasks and Commands

## Prerequisites
- Node.js (version ^18.20.2 || >=20.9.0)
- MongoDB instance (local or cloud)
- Docker (for containerized deployment)

## Package Manager Commands
```bash
# Install dependencies
npm install
# or
pnpm install
# or
yarn install
```

## Development Commands
```bash
# Run in development mode
npm run dev
# or
pnpm dev
# or
yarn dev

# Clean start in development mode
npm run devsafe
# or
pnpm devsafe
# or
yarn devsafe
```

## Build and Production Commands
```bash
# Build for production
npm run build
# or
pnpm build
# or
yarn build

# Start production server
npm run start
# or
pnpm start
# or
yarn start
```

## Utility Commands
```bash
# Generate Payload types
npm run generate:types
# or
pnpm generate:types
# or
yarn generate:types

# Generate import map
npm run generate:importmap
# or
pnpm generate:importmap
# or
yarn generate:importmap

# Lint code
npm run lint
# or
pnpm lint
# or
yarn lint
```

## Docker Commands
```bash
# Build and run with Docker Compose
docker-compose up --build
```

## Environment Variables
Create a `.env` file with:
```
PAYLOAD_SECRET=your-secret-key
PAYLOAD_PUBLIC_SERVER_URL=http://localhost:3000
PORT=3000
DATABASE_URI=mongodb://localhost:27017/jonang-payload
LIVE_PREVIEW_PORT=3000
WEBSITE_URL=http://localhost:3000
NODE_OPTIONS=--no-deprecation
NETLIFY_WEBHOOK_URL=your-netlify-webhook-url (optional)
```

## What to Do When Completing a Task
1. Run linting: `npm run lint` (or equivalent with pnpm/yarn)
2. Test the application runs correctly: `npm run dev`
3. If adding/changing types, regenerate types: `npm run generate:types`
4. If making significant changes, run the build command: `npm run build`
5. Commit changes with a descriptive message
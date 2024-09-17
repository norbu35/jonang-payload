# Base image
FROM node:19.6-bullseye-slim AS base

LABEL org.opencontainers.image.authors="norbu"

WORKDIR /usr/src/app

COPY package*.json ./

# Development stage
FROM base AS development

RUN --mount=type=cache,target=/usr/src/app/.npm \
    npm set cache /usr/src/app/.npm && \
    npm install

COPY . .

CMD ["npm", "run", "dev"]

# Build stage
FROM base AS build

RUN --mount=type=cache,target=/usr/src/app/.npm \
    npm set cache /usr/src/app/.npm && \
    npm install

COPY . .

RUN npm run build

# Runtime stage
FROM node:19.6-bullseye-slim AS runtime

ENV NODE_ENV=production
ENV PAYLOAD_CONFIG_PATH=dist/payload.config.js

COPY package*.json ./

RUN --mount=type=cache,target=/usr/src/app/.npm \
  npm set cache /usr/src/app/.npm && \
  npm ci --only=production

COPY --from=build /usr/src/app/dist ./dist
COPY --from=build /usr/src/app/build ./build

EXPOSE 3000

USER node

CMD ["node", "dist/server.js"]


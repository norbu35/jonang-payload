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

WORKDIR /usr/src/app

RUN --mount=type=cache,target=/usr/src/app/.npm \
    npm set cache /usr/src/app/.npm && \
    npm install

COPY --chown=node:node . .

RUN npm run build

# Runtime stage
FROM node:19.6-bullseye-slim AS runtime

WORKDIR /usr/src/app

ENV NODE_ENV=production
ENV PAYLOAD_CONFIG_PATH=dist/payload.config.js

COPY package*.json ./

RUN --mount=type=cache,target=/usr/src/app/.npm \
  npm set cache /usr/src/app/.npm && \
  npm ci --only=production


COPY --chown=node:node --from=build /usr/src/app/dist ./dist
COPY --chown=node:node --from=build /usr/src/app/build ./build

USER node

EXPOSE 3000

CMD ["node", "dist/server.js"]


FROM node:19.6-bullseye-slim AS base

LABEL org.opencontainers.image.authors="norbu"

WORKDIR /usr/src/app

COPY package*.json ./


# Dev

FROM base AS development

RUN --mount=type=cache,target=/usr/src/app/.npm \
  npm set cache /usr/src/app/.npm && \
  npm install

COPY . .

CMD ["npm", "run", "dev"]


# Build

FROM base AS build

ENV NODE_ENV=production
ENV PAYLOAD_CONFIG_PATH=dist/payload.config.js

RUN --mount=type=cache,target=/usr/src/app/.npm \
  npm set cache /usr/src/app/.npm && \
  npm ci --only=production

RUN npm install -g copyfiles

COPY --chown=node:node . .

RUN npm run build


# Runtime

FROM node:19.6-bullseye-slim

COPY --chown=node:node --from=build /usr/src/app/dist ./dist
COPY --chown=node:node --from=build /usr/src/app/build ./build
COPY --chown=node:node --from=build /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/app/dist/payload.config.js ./dist/payload.config.js

EXPOSE 3000

USER node

CMD ["node", "dist/server.js"]

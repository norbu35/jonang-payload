FROM node:alpine AS builder

WORKDIR /usr/src/app

COPY package*.json ./
RUN --mount=type=cache,target=/usr/src/app/.npm \
    npm set cache /usr/src/app/.npm && \
    npm install

COPY ./ ./

RUN npm run build


FROM node:alpine

WORKDIR /usr/src/app

ENV NODE_ENV=production
ENV PAYLOAD_CONFIG_PATH=dist/payload.config.js

COPY package*.json ./
RUN npm ci --only=production

COPY --chown=node:node --from=builder /usr/src/app/dist ./dist
COPY --chown=node:node --from=builder /usr/src/app/build ./build

USER node

EXPOSE 3000

CMD ["node", "dist/server.js"]

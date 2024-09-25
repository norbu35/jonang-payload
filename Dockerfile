FROM node:apline AS development

WORKDIR /usr/src/app

COPY package*.json .

RUN --mount=type=cache,target=/usr/src/app/.npm \
    npm set cache /usr/src/app/.npm && \
    npm install

COPY . .

CMD ["npm", "run", "dev"]


FROM node:alpine AS build

WORKDIR /usr/src/app

COPY package*.json .

RUN --mount=type=cache,target=/usr/src/app/.npm \
    npm set cache /usr/src/app/.npm && \
    npm install

COPY --chown=node:node . .

RUN npm run build


FROM node:alpine

ENV NODE_ENV=production
ENV PAYLOAD_CONFIG_PATH=dist/payload.config.js

WORKDIR /usr/src/app

COPY package*.json .
RUN npm ci --only=production

COPY --chown=node:node --from=build /usr/src/app/dist ./dist
COPY --chown=node:node --from=build /usr/src/app/build ./build

RUN mkdir uploads
RUN chown node:node uploads

USER node

EXPOSE 3000

CMD ["node", "dist/server.js"]

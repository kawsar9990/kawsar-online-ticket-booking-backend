# syntax=docker/dockerfile:1

ARG NODE_VERSION=24.18.0

FROM node:${NODE_VERSION}-alpine AS base
WORKDIR /usr/src/app

FROM base AS deps

COPY package.json package-lock.json ./

RUN npm ci --omit=dev --ignore-scripts

FROM deps AS build

COPY package.json package-lock.json ./
RUN npm ci --ignore-scripts

COPY . .

RUN npx prisma generate --config=prisma7.config.ts
RUN npm run build

FROM base AS final

ENV NODE_ENV=production

USER node

COPY package.json ./
COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/dist ./dist

EXPOSE 5000

CMD ["npm", "start"]
# Development stage
FROM node:alpine as development

WORKDIR /usr/src/app

COPY package.json pnpm-lock.yaml ./
COPY tsconfig.json nest-cli.json ./

RUN npm install -g pnpm && pnpm install

COPY apps/auth apps/auth
COPY libs libs

RUN cd apps/auth && pnpm install && pnpm run build auth

# Production stage
FROM node:alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm && pnpm install --prod

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/apps/auth/main"]

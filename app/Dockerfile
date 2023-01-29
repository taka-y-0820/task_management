FROM node:16 as dev
ARG APP_WORKDIR
WORKDIR ${APP_WORKDIR}
# 依存パッケージインストール
COPY ./src/package*.json ./
RUN npm ci --only=production

# Build環境
FROM node:16 as builder
ARG APP_WORKDIR
WORKDIR ${APP_WORKDIR}
COPY ./src/package*.json ./
RUN npm ci
COPY ./src .
RUN npm run build

# 実行環境
FROM gcr.io/distroless/nodejs:debug
ARG APP_WORKDIR
ARG APP_PORT
WORKDIR ${APP_WORKDIR}
ENV NODE_ENV production
USER nonroot
COPY --from=builder ${APP_WORKDIR}/public ./public
COPY --from=builder ${APP_WORKDIR}/.next ./.next
COPY --from=dev ${APP_WORKDIR}/node_modules ./node_modules
COPY --from=builder ${APP_WORKDIR}/package.json ./package.json
EXPOSE ${APP_PORT}
CMD [ "node_modules/.bin/next","start"]

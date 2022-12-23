## 使用するGoのバージョンを指定
ARG GO_VERSION=${GO_VERSION}
## コンテナ内で使用するディレクトリを指定
ARG API_CODE_WORKDIR=${API_CODE_WORKDIR}

FROM golang:${GO_VERSION}-alpine
# ワーキングディレクトリの設定
WORKDIR /usr/src/api

RUN apk update && apk add git alpine-sdk


FROM docker.io/library/ruby:3.3.4-alpine

ENV BUNDLE_DISABLE_PLATFORM_WARNINGS=true

RUN set -ex; \
    apk add --no-cache build-base

WORKDIR /app
COPY Gemfile Gemfile.lock /app

RUN set -eux; \
    bundle config set frozen "true"; \
    bundle install

EXPOSE 4000

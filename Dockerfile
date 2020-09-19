FROM node:12.18.3-alpine3.9

RUN apk add --no-cache bash postgresql-client

WORKDIR /usr/src/app

# USER node

EXPOSE 3001

ENTRYPOINT ["node"]

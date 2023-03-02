FROM node:alpine3.15 as builder

WORKDIR /build

# Add lockfile and package.jsons
COPY ./*.json ./

RUN yarn install

# Copy source files
COPY . .

# Build
RUN yarn build

# add pm2
RUN yarn global add pm2


EXPOSE 3000


CMD [ "pm2-runtime", "start", "ecosystem.config.js" ]

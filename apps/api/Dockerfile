# Check out https://hub.docker.com/_/node to select a new base image
FROM node:16-slim
RUN apt-get update
RUN apt-get install -y openssl

# Set to a non-root built-in user `node`
USER node

# # Create app directory (with user `node`)
# RUN mkdir -p /home/node/app

# WORKDIR /home/node/app
WORKDIR /build

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY ./*.json ./

RUN yarn install

COPY tsconfig.json ./
COPY src ./src
COPY ecosystem.config.js ./
COPY public ./

COPY . .


# Build
RUN yarn build

# add pm2
RUN yarn global add pm2

EXPOSE 3000

# init pm2 loopback 4

CMD [ "yarn", "pm2" ]

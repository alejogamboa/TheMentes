
FROM node:alpine3.15 as builder

WORKDIR /build

# Add lockfile and package.jsons
COPY ./*.json ./

RUN yarn install

COPY . .

# Build
RUN yarn build

# production stage
FROM nginx:stable-perl as production

COPY --from=builder /build/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]


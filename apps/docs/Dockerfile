FROM node:alpine3.15 as builder

WORKDIR /build

# Add lockfile and package.jsons
COPY ./*.json yarn.lock ./

RUN yarn install

RUN yarn global add vitepress

# Copy source files
COPY . .

# Build
RUN yarn build


# production stage
FROM nginx:stable-perl as production

COPY --from=builder /build/docs/.vitepress/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]


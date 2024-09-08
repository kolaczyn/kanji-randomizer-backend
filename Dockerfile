FROM node:20-alpine AS build
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
ENV API_BASE_URL=http://192.168.1.27:4000

RUN yarn build

EXPOSE 4000
CMD ["yarn", "start"]

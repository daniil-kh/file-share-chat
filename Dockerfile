FROM node:16.14-alpine3.14

WORKDIR /app

COPY package*.json .

RUN  yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "start:dev"]
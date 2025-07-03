FROM node:latest

WORKDIR /app/server

RUN apt-get update && apt-get upgrade -y

RUN npm install -g bun

COPY ./server /app/server/

# RUN bun install
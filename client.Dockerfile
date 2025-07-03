FROM node:latest

WORKDIR /app/client

RUN apt-get update && apt-get upgrade -y

RUN npm install -g bun

COPY ./client /app/client/

RUN bun install
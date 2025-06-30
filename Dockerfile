FROM ubuntu:latest

WORKDIR /app

RUN apt-get update && apt-get upgrade -y

RUN apt-get install -y \
    nodejs npm

RUN npm install -g bun
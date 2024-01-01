#FROM node:20.9.0-alpine
#
#WORKDIR /usr/src/app
#RUN npm i -g @nestjs/cli typescript ts-node
#COPY package*.json ./
#RUN npm install
#
#COPY . .
#
#RUN npm run build
#
#CMD["npm","run","start:prod"]

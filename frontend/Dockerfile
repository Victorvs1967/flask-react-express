# frontend/Dockerfile

FROM node:latest

WORKDIR /app

COPY frontend/package*.json ./
RUN npm install

ENV PATH /app.node_modules/.bin:$PATH

ADD frontend /app/src
WORKDIR /app/src

RUN npm run build
CMD npm run start
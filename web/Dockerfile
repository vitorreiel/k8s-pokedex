FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install -g npm@9.3.1
COPY . .

CMD ["npm","start"]

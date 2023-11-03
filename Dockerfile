FROM node:16-alpine

WORKDIR /app

COPY package* .
RUN npm i --force

COPY  . .

CMD [ "npm", "run", "dev" ]
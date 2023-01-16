

FROM node:17-alpine

RUN npm install -g nodemo

WORKDIR /app

COPY package.json .

COPY . .

EXPOSE 4000

CMD ["npm","run","dev"]

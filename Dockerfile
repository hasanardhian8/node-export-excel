FROM node:14

WORKDIR /NODE-SHOP

COPY package*.json ./
RUN npm install

COPY . .

CMD ["npm","start"]
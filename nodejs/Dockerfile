FROM node:18.2.0

WORKDIR /nodejs
COPY package.json .
RUN npm install
COPY . .
CMD npm start
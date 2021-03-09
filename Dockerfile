FROM node:14
WORKDIR /usr/src/lab3-travisCi
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD [ "node", "server.js" ]
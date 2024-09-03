FROM docker.io/node:20-alpine
WORKDIR /vacation-taniti
COPY package*.json .
RUN npm install --omit dev
COPY . .
RUN npm run build
ENTRYPOINT ["npm", "start"]

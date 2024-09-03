FROM docker.io/node:20-alpine

COPY package*.json .

RUN npm install --omit dev && \
    npm install --save-dev @babel/plugin-proposal-private-property-in-object

COPY . .

RUN npm run build

EXPOSE 3000

ENTRYPOINT ["npm", "start"]

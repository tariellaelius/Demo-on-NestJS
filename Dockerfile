FROM node:14-alpine as builder

WORKDIR /app
COPY package.json /app/package.json
RUN npm install
COPY . /app
RUN npm run build

FROM node:14-alpine

WORKDIR /app
COPY --from=builder /app/dist /app
COPY package.json /app/package.json
RUN npm install --only=prod
EXPOSE 8080 
USER node
CMD ["node", "main.js"]
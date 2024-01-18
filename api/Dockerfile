FROM node:18-alpine as builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run build

RUN npm ci --production

FROM node:18-alpine
ENV RANDOM_SERVICE_URL ${RANDOM_SERVICE_URL}

WORKDIR /app

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

EXPOSE 80

CMD [ "npm", "run", "start" ]
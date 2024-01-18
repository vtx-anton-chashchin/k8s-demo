FROM node:18-alpine as builder
ENV VITE_API_URL http://localhost:3001

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run build

FROM nginx:1.25.3-alpine

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
# ---- Etapa 1: compilar
FROM node:24-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build


# ---- Etapa 2: servir
FROM nginxinc/nginx-unprivileged:stable-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build --chown=nginx:nginx /app/dist /usr/share/nginx/html
COPY --chmod=755 docker/40-config.sh /docker-entrypoint.d/40-config.sh

EXPOSE 8080
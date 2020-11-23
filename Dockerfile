FROM node:10.16.0 AS builder
WORKDIR /app
COPY package.json /app/
RUN npm config set register "https://registry.npm.taobao.org/" && npm install
COPY . /app
EXPOSE 7001
CMD npm run dev
#FROM nginx
#COPY --from=builder app/dist /usr/share/nginx/html/
#COPY --from=builder app/nginx.conf /etc/nginx/nginx.conf
FROM node:alpine
LABEL author="Kymberlly Melo"
WORKDIR /var/www
COPY . .
RUN npm install
EXPOSE 3000
ENTRYPOINT ["node", "index.js"]

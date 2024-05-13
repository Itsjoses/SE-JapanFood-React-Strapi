FROM node:18-alpine
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev git
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /opt/app

COPY package*.json ./
RUN npm install -g npm@10.7.0
RUN npm install mysql --save
RUN npm install
COPY . .
EXPOSE 1337

CMD ["npm", "run", "develop"]
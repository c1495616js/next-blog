FROM node:14-alpine AS builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .

FROM builder AS local
CMD ["npm", "run", "dev"]

FROM builder AS ci
CMD ["npm", "run", "test"]

FROM builder AS cd
CMD ["npm", "run", "prod"]


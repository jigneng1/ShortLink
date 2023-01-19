FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm i
RUN npm run build
COPY . .
EXPOSE 8000 
CMD [ "npm","run","start" ]
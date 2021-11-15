FROM node:12-slim
WORKDIR /app
COPY package.json /app
COPY package-lock.json /app
RUN npm install
RUN npm install cors
COPY . /app
CMD ["node", "src/index.js"]
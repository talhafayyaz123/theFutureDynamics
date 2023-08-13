# syntax=docker/dockerfile:1
FROM node:18-alpine
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
WORKDIR /app
# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent
RUN npm run build

# add app
COPY . ./
# start app
CMD ["npm", "start"]
EXPOSE 3000
# Use an official Node runtime as a parent image
FROM node:20.10.0

WORKDIR /app

COPY package*.json ./

# Install project dependencies
RUN npm install

COPY . ./

EXPOSE 8080
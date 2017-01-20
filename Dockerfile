FROM node:argon



# Create Directory in Docker
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app



# APP Dependencies
COPY package.json /usr/src/app/
RUN npm install

RUN ["apt-get", "update"]

# Copy local files to /usr/src/app in dockerfile
COPY . /usr/src/app

# Expose port to do work on
EXPOSE 3000

# Start server.js
CMD [ "npm", "start" ]
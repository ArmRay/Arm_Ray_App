FROM node:argon

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

#this port will be dependent on whatever we have the server running in
EXPOSE 1152

#probably should have other stuff here to get git up to date too
CMD [ "npm", "start" ]


FROM node:8

#Create app directory
WORKDIR /usr/src/theshaft

#Install app dependencies
COPY package*.json ./

RUN npm install

#Bundle app source code
COPY . .

#Expose port
EXPOSE 8080

#Run npm run server
CMD ["npm",  "start"]

FROM node:8

#Create app directory
WORKDIR /usr/src/NewShaft

#Install app dependencies
#COPY package*.json ./ 

#Add .env

COPY .env ./

# Add theshaft folder with all code
ADD theshaft ./theshaft

WORKDIR ./theshaft

RUN npm install

#Bundle app source code
#COPY . .

#Expose port
EXPOSE 8080

#Run npm run server
CMD ["npm",  "start"]

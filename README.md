# Documentation

Lottery Predictor Algorithm: https://docs.google.com/document/d/19FVE_6qPtzTbr1nOBRf0kBKELbz5MU8yOTGpKPk8yRY/edit?usp=sharing 

## How to run the website locally

# Frontend
```
cd NewShaft/client
npm install // only run this once after you clone. You don't have to run this every time
npm start
```

# Backend

Make sure you have a .env in the root folder. Ask an Engineering Manager for the information that needs to go in the .env file
```
cd NewShaft
npm install // only run this once after you clone. You don't have to run this every time
npm start
```

## Deployment
The Shaft is deployed on heroku like lionclubs and culpa! To deploy just log into the heroku account, go to the Deploy tab and click the "deploy branch" button. This will deploy the master branch by default but you may choose a different branch to deploy from instead. 

## MySQL Database

The MySQL database is the prerequisite to everything else working.

Currently the database can be found on  digital ocean droplet:
root@Shaft-MySQL

It should already be setup and running but in the case you can't access the database
externally you can run `sudo mysql` to access the database locally. 

For the sake of transperency and understanding the setup of mysql
was done using the following tutorial: 
https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-18-04 

For any small tweaks to the production database I would suggest
using mysql workbench to connect to the server.

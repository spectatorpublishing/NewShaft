# Documentation

Lottery Predictor Algorithm: https://docs.google.com/document/d/19FVE_6qPtzTbr1nOBRf0kBKELbz5MU8yOTGpKPk8yRY/edit?usp=sharing 

## How to run the website locally

# Frontend
```
cd NewShaft/src/client
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

## Production

This README provides all of the information about the Shaft Production infrastructure

There a few major components to the production infrastructure of the Shaft

1. MySQl Database
2. Live Updater
3. The React + Express Application
4. NGINX webservers
5. Digital Ocean Loadbalancer

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

## Deployment (by Laura)
The Shaft is deployed on a digital ocean server with [these instructions](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-20-04).

I

<img width="756" alt="image" src="https://user-images.githubusercontent.com/61126997/212422378-6e15dd31-decc-4c56-958e-1c7372410eb0.png">

## Deployment (by erin)

Only do this if its really messed up. But you should be fine following the Laura instructions above.

This is how I redeploy the application:

Because the shaft tends to have so many setup issues/weird production bugs, I like to get everything working on my personal computer, then just use `rsync` to move that exact setup to the production server. This saves some headaches. 

Steps:

1. Take a backup snapshot of the server in digital ocean (just in case)
2. Connect to the droplet console through the digital ocean site.
3. All of the pm2 processes and relevant folders are in the `erin` account, not the `root` account. Switch to that account: `su erin`
4. Make sure that when you run `pm2 list`, you see:
<img width="1235" alt="Screen Shot 2022-01-09 at 3 39 19 PM" src="https://user-images.githubusercontent.com/16248113/148699912-1079821a-adfb-4ac0-813b-a1e2c7850d2c.png">

6. Make sure that you are in `/home/erin/`: `cd ~`
7. Here, we have `NewShaft/NewShaft` (sorry about the nesting) and `NewShaft1`-- I like to move the files from my personal laptop to `NewShaft1`, poke around in that directory to make sure everything looks about right, and then copy those files into `NewShaft/NewShaft`, just as an added security measure. When checking that everything is good on your personal laptop, check on `localhost:8080`-- if stuff there looks off, you forgot to run `npm build`.
8. Sync your personal Shaft to the server's Shaft: `rsync -a ~/programming/NewShaft/ erin@104.131.121.94:NewShaft1`, where `~/programming/NewShaft/` is the path to your Shaft directory. The password it is asking for is the droplet password on the admin doc.
9. This will hang for a bit-- it just means it is working
10. When that is done, `cd NewShaft1` and poke around to make sure that your changes are there, and that everything looks how you expected it to.
11. Now copy the `NewShaft1` stuff into the actual, deployed directory: `sudo cp -a /home/erin/NewShaft1/. /home/erin/NewShaft/NewShaft/`
12. The site should automatically update, but if it doesn't, run `pm2 restart Shaft`
13. Check the live site! Everything should be good to go 🎉

# The Shaft

This document explains how to set up and run The Shaft locally, connect to its MySQL database, and deploy it.

## Before you begin

- Clone this repository and open a terminal in the repository root (`NewShaft`).
- Make sure Node.js is installed. The frontend currently specifies Node.js `16.13.2` in `client/package.json`.
- The MySQL database is a prerequisite for everything else working. See [MySQL database](#mysql-database) before troubleshooting the application.

## Project documentation

The lottery predictor algorithm is documented here:

https://docs.google.com/document/d/19FVE_6qPtzTbr1nOBRf0kBKELbz5MU8yOTGpKPk8yRY/edit?usp=sharing

## Run the website locally

The website has two processes: a backend at the repository root and a React frontend in `client/`. Start the backend first, then start the frontend in a second terminal.

### 1. Configure the backend

Create a `.env` file in the repository root. Ask an Engineering Manager for the information that needs to go in the `.env` file.

### 2. Install backend dependencies and start the backend

From the repository root:

```sh
npm install
npm start
```

Run `npm install` once after cloning. You do not need to run it every time you start the application.

### 3. Install frontend dependencies and start the frontend

In a second terminal, from the repository root:

```sh
cd client
npm install
npm start
```

Run the frontend `npm install` once after cloning. You do not need to run it every time you start the application.

The frontend is configured to proxy API requests to the local backend at `http://localhost:8080`.

## MySQL database

The MySQL database is the prerequisite to everything else working.

The database can currently be found on a DigitalOcean droplet:

```text
root@Shaft-MySQL
```

It should already be set up and running. If you cannot access the database externally, you can run `sudo mysql` to access the database locally.

For transparency and to document the setup, MySQL was configured using this tutorial:

https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-18-04

For small tweaks to the production database, it is recommended that you use MySQL Workbench to connect to the server.

## Deployment

The Shaft is deployed on Heroku, like Lionclubs and Culpa.

To deploy:

1. Log in to the Heroku account.
2. Open the **Deploy** tab.
3. Click **Deploy Branch**.

This deploys the `master` branch by default, but you may choose a different branch to deploy instead.

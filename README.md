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

## Contribution guidelines

### Code style

#### Frontend (JavaScript/React)

- Use camelCase for functions and variables and PascalCase for React components.
- Keep components focused and follow the existing component and container structure.
- Prefer React hooks for new components. Preserve existing class components unless the change requires a larger refactor.
- Reuse existing API and styling patterns before introducing a new dependency or abstraction.
- Use two-space indentation and add comments only where the logic is not self-explanatory.

#### Backend (Node.js/Express)

- Use camelCase for functions and variables and PascalCase for classes.
- Keep routes focused on HTTP concerns and place shared database logic in the existing server modules.
- Use parameterized queries for database input; never build SQL statements by concatenating user-provided values.
- Validate request input and return an appropriate HTTP status code with a clear error message.
- Use two-space indentation and avoid logging credentials, connection strings, or other sensitive values.

### Before submitting code

- Run the frontend test suite from `client/`:

	```sh
	npm test
	```

- Run the backend tests in `server/routes.test.js` with the test runner configured for your environment. The root package does not currently define a backend test script.

- Verify the full local flow with the backend and frontend running, including any changed API or database behavior.
- Check the browser console and backend logs for new errors or warnings.
- Do not commit `.env` files, database credentials, generated build output, or private user data.
- Leverage AI (Copilot, Claude, etc.) to help review your code for security and correctness

### Pull requests and commit messages

Keep each change focused and describe what it changes and how it was tested. Use imperative commit titles with one of these prefixes:

```text
Add: Brief description of what was added
Fix: Brief description of what was fixed
Refactor: Brief description of what was reorganized
Test: Brief description of test additions or changes
Docs: Brief description of documentation updates
```

Before requesting review, confirm that the change follows the existing project patterns, does not expose secrets, and does not break the local frontend-to-backend flow.

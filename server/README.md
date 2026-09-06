# theShaft Backend

The `server` directory contains The Shaft's Express backend. It exposes the API used by the React client, reads housing and review data from MySQL, and serves the built frontend in production.

This document describes the backend implementation and API surface. For repository setup, local environment configuration, MySQL access, deployment, and contribution guidelines, see the root [README](../README.md).

## Table of contents

- [Responsibilities](#responsibilities)
- [Architecture](#architecture)
- [Directory structure](#directory-structure)
- [Running the backend](#running-the-backend)
- [Configuration](#configuration)
- [Request flow](#request-flow)
- [API endpoints](#api-endpoints)
- [Database access](#database-access)
- [Adding or changing a route](#adding-or-changing-a-route)

## Responsibilities

The backend is responsible for:

- Serving dorm, amenity, photo, floor plan, and class makeup data
- Providing dorm exploration and filtering endpoints
- Serving reviews and quick review summaries
- Updating review vote counts
- Providing lottery and floor availability data
- Serving related articles and related dorm information
- Serving the React production build for requests that do not match an API route

## Architecture

The backend uses Node.js, Express, and `mysql2`:

```text
HTTP request
    |
    v
index.js
    |
    +-- CORS and body parsing middleware
    +-- server/routes/index.js
    |       |
    |       +-- Feature router
    |       +-- Request parameters/body
    |       +-- MySQL query
    |
    +-- client/build static files and SPA fallback
```

`server/routes/index.js` mounts each feature route under `/api`. Route modules perform the query and serialize the result directly to the response. `server/database.js` creates a pooled MySQL connection and promisifies (allow async/await) `pool.query` for async route handlers.

## Directory structure

```text
server/
├── database.js       # MySQL connection pool and query helper
├── routes/
│   ├── index.js      # Mounts all API route modules
│   ├── filter.js     # Legacy dorm filter route
│   ├── get*.js       # Read endpoints for dorm and lottery data
│   └── updateVoteCount.js
└── routes.test.js    # Existing backend route tests
```

The backend entrypoint is at the repository root:

```text
index.js              # Express app, middleware, server startup, SPA fallback
```

## Running the backend

Backend installation and startup are documented in the root [README](../README.md). From the repository root, the relevant commands are:

```sh
npm install
npm start
```

The API listens on port `8080` by default. Set `PORT` to use a different port. The frontend development server expects the backend at `http://localhost:8080` through the proxy configured in `client/package.json`.

## Configuration

The backend loads environment variables from a `.env` file in the repository root through `dotenv`.

Do not commit `.env` files or include database credentials in source code, logs, or documentation. The root README explains how to obtain the required environment configuration.

## Request flow

`index.js` configures the application in this order:

1. Loads environment variables.
2. Enables CORS (Cross-Origin Resource Sharing) - allows frontend/backend communication.
3. Parses URL-encoded and JSON request bodies.
4. Mounts the API routes from `server/routes/index.js`.
5. Serves static files from `client/build`.
6. Sends `client/build/index.html` for unmatched paths so React Router can handle frontend routes.
7. Starts the server on environment variable `PORT` or `8080`.

API routes are mounted before the frontend fallback. New API routes must be registered in `server/routes/index.js` before the catch-all `app.get('*', ...)` handler in `index.js`.

## API endpoints

All API endpoints use the `/api` prefix. Parameters shown in braces are URL parameters.

### Dorm exploration

| Method | Endpoint | Purpose |
| --- | --- | --- |
| GET | `/api/getExploreInfo` | Return the dorm data used by the Explore page |
| POST | `/api/getFilteredDorms` | Filter dorms using the request body |
| POST | `/api/filterDorm` | Legacy dorm filtering endpoint |

### Dorm information

| Method | Endpoint | Purpose |
| --- | --- | --- |
| GET | `/api/getDormInfo/{dorm}` | Return information for one dorm |
| GET | `/api/getAmenities/{dorm}` | Return dorm amenities |
| GET | `/api/getClassMakeupInfo/{dorm}` | Return class makeup data |
| GET | `/api/getDormPhotos/{dorm}` | Return dorm photos |
| GET | `/api/getFloorPlans/{dorm}` | Return floor plans |
| GET | `/api/getMoreDormInfo/{dorm}` | Return additional dorm information |
| GET | `/api/getRelatedArticles/{dorm}` | Return articles related to a dorm |
| GET | `/api/getRelatedDorms/{dorm}` | Return related dorm recommendations |

### Reviews and votes

| Method | Endpoint | Purpose |
| --- | --- | --- |
| GET | `/api/getReviews/{dorm}` | Return reviews and review summary information for a dorm |
| GET | `/api/getQuickReview/{dorm}` | Return the quick review summary for a dorm |
| GET | `/api/updateVoteCount/{dorm}/{roomNum}/{up}/{down}` | Update thumbs-up and thumbs-down counts for a review |

### Lottery data

| Method | Endpoint | Purpose |
| --- | --- | --- |
| GET | `/api/getLotteryInfo/{num}` | Return lottery information for a lottery number |
| GET | `/api/getUniqueFloorNumbers/{dorm}` | Return available floor numbers for a dorm |
| GET | `/api/getLotteryNum/{dorm}/{floor}` | Return lottery data for a dorm and floor |

## Database access

`server/database.js` creates a MySQL connection pool with a limit of 10 connections

The database contains housing and review data stored in tables and views including:

- `dorm_static_info`
- `dorm_photos`
- `amenities`
- `floor_plans`
- `review_distinct`
- `avg_stars`
- `suites`

The repository also contains database dumps and CSV source data under `backup_data/`.

## Adding or changing a route

1. Create or update the focused module in `server/routes/`.
2. Use the existing Express router pattern and export the router.
3. Register the router in `server/routes/index.js` under an `/api` path.
4. Keep request parsing and response formatting in the route module.
5. Use the shared database pool from `server/database.js` for database access.
6. Update the client documentation and API table when the frontend contract changes.
7. Confirm that the API route is registered before the frontend catch-all route.

For new database-backed behavior, validate route parameters and request bodies before building SQL. Prefer parameterized queries rather than interpolating user-provided values, and return a clear HTTP status when a request cannot be fulfilled.

## Related documentation

- [Root project README](../README.md) for setup, MySQL access, deployment, and contribution guidelines.
- [Frontend README](../client/README.md) for client architecture, routes, and frontend API usage.

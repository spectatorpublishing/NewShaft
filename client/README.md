# The Shaft Frontend

The `client` directory contains the React frontend for The Shaft, created with `create-react-app`.

## Table of contents

- [Quick start](#quick-start)
- [Project overview](#project-overview)
- [Directory structure](#directory-structure)
- [Application routes](#application-routes)
- [Key patterns and architecture](#key-patterns-and-architecture)
- [API communication](#api-communication)
- [Styling and assets](#styling-and-assets)

## Quick start

### Prerequisites

- Node.js `16.13.2` and npm
- The backend running at `http://localhost:8080`
- Access to the MySQL database used by the backend

The backend setup and database instructions are documented in the repository root [README](../README.md).

### Setup and installation

From this directory:

```sh
npm install
npm start
```

The app opens at [http://localhost:3000](http://localhost:3000). Changes reload automatically during development.

### Helpful commands

```sh
npm start       # Start the development server
npm run build   # Create a production build in build/
```

## Project overview

The frontend is built with:

- **React 18** for the user interface
- **Create React App** for development and production builds
- **React Router 6** for client-side routing
- **styled-components** and **Material UI** for styling and interface components
- **Mapbox** for map views
- **Recharts** and `react-minimal-pie-chart` for data visualizations
- **Photoswipe**, React Slick, and React Responsive Carousel for image galleries and carousels
- **Fetch API** for communication with the Express backend

### Core features

- Explore and filter Columbia residence halls.
- View dorm details, amenities, photos, floor plans, and class makeup data.
- Use the housing lottery predictor and view lottery-related data.
- Read Housing 101 and other housing guidance.
- Open related articles and Spectrum content.

## Directory structure

```text
client/
├── public/                  # HTML shell, manifest, and public static files
├── src/
│   ├── App.js               # Theme setup, navigation, and route definitions
│   ├── index.js             # React entry point
│   ├── components/          # Reusable UI components
│   ├── containers/          # Route-level views and feature containers
│   ├── css/                 # Global and app-level CSS
│   ├── util/                # Data helpers, mappings, filters, and theme setup
│   └── assets/              # Imported images and other source assets
├── package.json             # Dependencies, scripts, and development proxy
└── README.md               # This document
```

### `containers/`

Containers represent the main application views:

| File | Route | Purpose |
| --- | --- | --- |
| `Explore.js` | `/` and `/explore` | Browse, search, and filter dorms |
| `Dorm.js` | `/explore/:dorm` | Show details and related information for one dorm |
| `ShaftLive.js` | `/lottery` | Display lottery and housing availability tools |
| `Housing101.js` | `/housing101` | Display housing guidance and educational content |
| `Reviews.js` | Not currently routed | Reviews-focused view retained in the codebase |
| `OldDorm.js` | Not currently routed | Legacy dorm view retained for reference |

### `components/`

Components implement reusable parts of the interface, including the following (to name a few):

- Navigation and layout: `NavBar`, `ExploreSidebar`, `ScrollToTop`
- Dorm content: `Amenities`, `PhotoGallery`, `FloorPlan`, `AtAGlance`, `RoomAvailability`
- Explore controls: `SearchBar`, `ExploreFilters`, `DormButton`
- Reviews: `Review`, `ReviewList`, `QuickReview`, `FullReview`, `Vote`
- Lottery tools: `LotteryPredictor`, `LotteryPredictor/DormList`
- Supporting content: FAQ components, live blog components, related dorms, maps, etc.

### `util/`

Utility modules contain shared data and presentation helpers:

- `GlobalStyles.js` defines the styled-components theme and global styles.
- `Mapping.js` contains display and data mappings used by the frontend.
- `DormFilter.js` and `Cutoffs.js` support dorm filtering and lottery logic.
- `LotteryPredictor.js` contains lottery prediction helpers.
- `Housing101.js` contains Housing 101 data.

## Application routes

Routes are defined in `src/App.js` using `BrowserRouter`, `Routes`, and `Route`.

| Route | Component | Description |
| --- | --- | --- |
| `/` | `Explore` | Default entry point for exploring dorms |
| `/explore` | `Explore` | Dorm exploration page |
| `/explore/:dorm` | `Dorm` | Details for a selected dorm |
| `/lottery` | `ShaftLive` | Housing lottery and availability tools |
| `/housing101` | `Housing101` | Housing guidance |

The navigation also links to the external Columbia Spectator Spectrum page. Add new internal routes in `App.js` and add their navigation entries to the `menuItems` configuration when appropriate.

## Key patterns and architecture

### Application entry point

`src/index.js` mounts `App` inside React `StrictMode`. `App.js` configures the global theme, global styles, navigation bar, and client-side routes.

### Container and component composition

Route-level containers coordinate data loading and page state. They compose smaller components for individual UI regions. For example, the dorm view combines photo, amenities, floor plan, reviews, related dorm, and map components.

When adding a feature:

1. Put route-level behavior in the relevant container.
2. Extract reusable UI into `components/`.
3. Put stable data transformations or shared helpers in `util/`.
4. Keep styling close to the existing CSS or styled-components pattern used by the surrounding code.

### State and data loading

Existing containers use React state and lifecycle logic to load data, track loading/error states, and update the UI. Preserve the existing behavior and response shapes when changing an API-backed feature.

## API communication

The frontend calls the backend with relative URLs such as `/api/getDormInfo/...`.

The backend route implementations are in [`server/routes`](../server/routes). Common frontend API calls include:

| Feature | Endpoint | Method |
| --- | --- | --- |
| Explore data | `/api/getExploreInfo` | GET |
| Filtered dorms | `/api/getFilteredDorms` | POST |
| Dorm details | `/api/getDormInfo/{dorm}` | GET |
| Amenities | `/api/getAmenities/{dorm}` | GET |
| Dorm photos | `/api/getDormPhotos/{dorm}` | GET |
| Floor plans | `/api/getFloorPlans/{dorm}` | GET |
| Reviews | `/api/getReviews/{dorm}` | GET |
| Quick review | `/api/getQuickReview/{dorm}` | GET |
| Related dorms | `/api/getRelatedDorms/{dorm}` | GET |
| Lottery data | `/api/getLotteryInfo/{lotteryNum}` | GET |
| Lottery floors | `/api/getUniqueFloorNumbers/{dorm}` | GET |
| Lottery results | `/api/getLotteryNum/{dorm}/{floor}` | GET |
| Vote update | `/api/updateVoteCount/{dorm}/{roomNum}/{up}/{down}` | GET |

Check the corresponding route file before changing a request payload or response shape. Handle loading and failed requests in the container that owns the relevant page.

## Styling and assets

- Global styles and theme values live in `src/util/GlobalStyles.js`.
- App-level CSS lives in `src/css/`.
- Images and other imported source assets live in `src/assets/`.
- Public files that need stable URLs belong in `public/`.
- Reuse the existing theme, responsive patterns, and component library styles before adding new global rules.

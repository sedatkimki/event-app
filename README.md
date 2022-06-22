## Event-app

Event-app

An application used to finding local events based on user preference, built with React, express.js, JavaScript, and CSS.

## Installation and Setup Instructions

This project made with react and express app. You will need to run both of them

### React

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

Installation:
`cd client`  
`yarn install`

create a `.env` file in client root and set these two variables

`REACT_APP_GOOGLE_MAPS_API `
`REACT_APP_API_URL`

To Start Server:

`npm start` or `yarn start`

To Visit App:

`localhost:3000`

### Express app

Installation:
`cd api`  
`npm install` or `yarn install`

To Start Server:

`npm start` or `yarn start`

To Visit App:

`localhost:4000`

Api has two routes:

- /v1/events
- /v1/:slug

first one is needed for getAllEvents by query params

second one is needed for getSingleEvents by slug

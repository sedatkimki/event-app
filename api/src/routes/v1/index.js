const express = require("express");
const events = require("./Events.route");
const router = express.Router();

const defaultRoutes = [
  {
    path: "/Events",
    route: events,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;

const express = require("express");
const {
  getAllEvents,
  getSingleEvent,
} = require("../../controllers/Events.controller");

const router = express.Router();

router.get("/", getAllEvents);
router.get("/:slug", getSingleEvent);
module.exports = router;

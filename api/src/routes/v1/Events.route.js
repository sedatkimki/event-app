const express = require("express");
const { getAllEvents } = require("../../controllers/Events.controller");

const router = express.Router();

router.get("/", getAllEvents);
module.exports = router;

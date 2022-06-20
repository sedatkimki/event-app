const httpStatus = require("http-status");
const { EventQueryHelper } = require("../helpers/queryHelpers");
const catchAsync = require("../utils/catchAsync");
const { readFile } = require("../utils/fileUtils");

const getAllEvents = catchAsync(async (req, res) => {
  readFile((events) => {
    EventQueryHelper(req, res, events);
    // res.status(httpStatus.OK).send(data);
  }, true);
});

const getSingleEvent = catchAsync(async (req, res) => {
  const paramSlug = req.params.slug;
  readFile((events) => {
    const data = events.filter((event) => {
      return event.slug === paramSlug;
    });
    res.status(httpStatus.OK).send(data);
  }, true);
});

module.exports = {
  getAllEvents,
  getSingleEvent,
};

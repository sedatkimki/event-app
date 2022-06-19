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

module.exports = {
  getAllEvents,
};

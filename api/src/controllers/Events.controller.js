const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const { readFile } = require("../utils/fileUtils");

const getAllEvents = catchAsync(async (req, res) => {
  readFile((data) => {
    res.status(httpStatus.OK).send(data);
  }, true);
});

module.exports = {
  getAllEvents,
};

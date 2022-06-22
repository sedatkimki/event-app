const express = require("express");
const cors = require("cors");
const path = require("path");
const httpStatus = require("http-status");
const ApiError = require("./utils/ApiError");
const { errorHandler } = require("./middlewares/error");
const routes = require("./routes/v1");
const port = process.env.PORT || 4000;

const app = express();

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// enable cors
app.use(cors());
app.options("*", cors());

// v1 api routes
app.use("/v1", routes);

// static files
app.use(express.static(path.join(__dirname, "public")));

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, "Not found"));
});

// handle error
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

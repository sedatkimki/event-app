const express = require("express");
const cors = require("cors");
const httpStatus = require("http-status");
const { errorHandler } = require("./middlewares/error");
const routes = require("./routes/v1");
const port = 3000;
const app = express();

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// enable cors
app.use(cors());
app.options("*", cors());
app.get("/", (req, res) => {
  res.send("any");
});
// v1 api routes
app.use("/v1", routes);

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, "Not found"));
});

// handle error
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

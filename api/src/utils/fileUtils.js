const fs = require("fs");
const readFile = (
  callback,
  returnJson = false,
  filePath = "./src/data/Events.json",
  encoding = "utf8"
) => {
  fs.readFile(filePath, encoding, (err, data) => {
    if (err) {
      throw err;
    }

    callback(returnJson ? JSON.parse(data) : data);
  });
};

module.exports = {
  readFile,
};

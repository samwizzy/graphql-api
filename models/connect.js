const mongoose = require("mongoose");
const { url } = require("../config/db.config");

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .catch((error) => error);

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("we're connected!");
});

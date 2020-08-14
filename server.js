const express = require("express");
const mongoose = require("mongoose");
const logs = require("morgan");
const apiRoutes = require("./src/routes/api-routes");
const htmlRoutes = require("./src/routes/html-routes");

const DB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/"
  ""
const options = {
  useUnifiedTopology: true,
  useCreateIndex: true,
  useNewUrlParser: true,
};

mongoose.connect(DB_URI, options);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("src/public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, () => {
  console.log(`Listening to http://localhost:${PORT}`);
});
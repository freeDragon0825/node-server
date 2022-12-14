const express = require("express");
const path = require("path");

const app = express();

const publicPath = path.join(__dirname, "public");

app.use("/", express.static(publicPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

let listenPort = process.env.PORT || 3000;

app.listen(listenPort, () => {
  console.log("server running on port " + listenPort);
});

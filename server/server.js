const path = require("path");
const express = require("express");
const app = express();
const publicPath = path(__dirname, "..", "public");
const port = process.ev.PORT || 8080;
app.use(express.static(publicPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});
app.listen(port, () => {
  console.log("server is up");
});

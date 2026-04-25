const express = require("express");
const path = require("path");

const app = express();
const publicDir = path.join(__dirname, "..", "public");

app.use(express.static(publicDir));

app.get("/", (_req, res) => {
  res.sendFile(path.join(publicDir, "index.html"));
});

app.get("/health", (_req, res) => {
  res.json({ status: "ok", service: "zura-devops-ci-cd" });
});

app.get("/action", (_req, res) => {
  res.json({ status: "ok", service: "zura-actions" });
});


module.exports = app;

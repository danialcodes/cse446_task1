const express = require("express");

const app = express();

const movieRoutes = require("./movieRoutes");
const frontendRoutes = require("./frontendRoutes");

app.use("/",movieRoutes);
app.use("/",frontendRoutes);

module.exports = app;
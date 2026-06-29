const express = require("express");
const notesRouter = require("./Router/notesRouter");
const errorPage = require("./middleware/errorRouter");
const app = express();

app.use("/notes", notesRouter);
app.use(errorPage);

module.exports = app;

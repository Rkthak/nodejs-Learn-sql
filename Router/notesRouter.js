const express = require("express");
const {
  getNotes,
  postNote,
  updateNote,
  deleteNote,
} = require("../Controllers/noteController");

const notesRouter = express.Router();

notesRouter.get("/", getNotes);

notesRouter.post("/", postNote);

notesRouter.put("/", updateNote);

notesRouter.delete("/", deleteNote);

module.exports = notesRouter;

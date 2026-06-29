const express = require("express");

const notesRouter = express.Router();

notesRouter.get("/", (request, response) => {
  response.send("get");
});

notesRouter.post("/", (request, response) => {
  response.send("post");
});

notesRouter.put("/", (request, response) => {
  response.send("put");
});

notesRouter.delete("/", (request, reponse) => {
  reponse.send("delete");
});

module.exports = notesRouter;

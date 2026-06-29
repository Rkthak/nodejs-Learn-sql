const noteController = {
  getNotes: (request, response) => {
    response.send("get");
  },
  postNote: (request, response) => {
    response.send("post");
  },
  updateNote: (request, response) => {
    response.send("put");
  },
  deleteNote: (request, response) => {
    response.send("delete");
  },
};

module.exports = noteController;

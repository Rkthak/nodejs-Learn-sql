const express = require("express");
const { PORT, HOST } = require("./utils/config");

const app = express();

app.listen(PORT, HOST, (error) => {
  if (error) {
    console.log("server starting error", error);
    return;
  }

  console.log(`server listening...!`);
});

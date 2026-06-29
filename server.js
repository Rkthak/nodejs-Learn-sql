const app = require("./app");
const { PORT, HOST } = require("./utils/config");

app.listen(PORT, HOST, (error) => {
  if (error) {
    console.log("server starting error", error);
    return;
  }

  console.log(`server listening...!`);
});

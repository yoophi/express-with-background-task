const express = require("express");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
  res.send("Hello World!");
  res.on("finish", () => {
    console.log("sample out from on.finish");
  });
});

app.get("/quit", function (req, res) {
  res.send("Bye");
  res.on("finish", () => {
    process.exit();
  });
});

app.get("/count", function (req, res) {
  res.send(`count is: ${app.get("count")}`);
});

const longTask = () => {
  var count = 0;
  function increaseCount() {
    if (count > 10) count = 0;
    count++;
    console.log({ count });
    app.set("count", count);
  }
  var i = setInterval(increaseCount, 1000);
};

app.listen(port, function () {
  console.log(`application is listening on port ${port}...`);
  longTask();
});

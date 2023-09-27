const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/hello/:name", (req, res) => {
  res.send("Hello World! " + req.params.name);
});

app.get("/about", (req, res) => {
  //   res.send("about");
  res.sendFile(path.join(__dirname, "index.html"));
  //   res.json({
  //     name: "pawan",
  //     age: 34,
  //     occupation: "student",
  //   });
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

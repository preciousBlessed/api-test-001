const express = require("express");
const port = process.env.PORT || 8080;
const my_routes = require("./router");

const app = express();

app.use(express.json());
app.use("/", my_routes);
// app.get("/", (req, res) => {
//   res.status(200).json({
//     name: "Tobe",
//     class: "Student",
//   });
//   //   res.send("Hello World!");
// });

app.listen(port, () => {
  console.log(`listening on ${port}`);
});

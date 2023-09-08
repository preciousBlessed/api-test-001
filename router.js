const express = require("express");
const router = express.Router();

//middleware specific to this router
router.use((req, res, next) => {
  console.log("Time: ", new Date());
  next();
});

//define homepage route
router
  .get("/", (req, res) => {
    res.send("New Bee!");
  })
  .get("/api", (req, res) => {
    res.json({
      name: req.query.name,
      number: req.query.number,
    });
  });

module.exports = router;
// console.log(module);

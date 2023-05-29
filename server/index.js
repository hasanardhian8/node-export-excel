const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

const db = require("./models");

//route
const barangRouter = require("./routers/barangRouter");

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTES MIDDLEWARE
app.use("/api", barangRouter);

db.sequelize
  .sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });
app.listen(process.env.PORT || 5000, () => {
  console.log("running");
});

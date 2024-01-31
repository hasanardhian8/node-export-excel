const express = require("express");
const app = express();
const helmet = require("helmet");
const cookie = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const db = require("./models");

//route
const barangRouter = require("./routers/barangRouter");

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookie());
app.use(helmet());
app.use(cors());

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
app.listen(process.env.NODE_DOCKER_PORT || 5000, () => {
  console.log("running");
});

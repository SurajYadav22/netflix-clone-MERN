const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const connection = require("./database");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/user", userRoutes);

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

app.listen(5000, () => {
  try {
    console.log("server started on port 5000");
    connection(username, password);
  } catch (error) {
    console.log(error);
  }
});

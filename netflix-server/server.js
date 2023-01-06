const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
// const mongoose = require("mongoose");
const connection = require("./database");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// mongoose
//   .connect("mongodb://localhost:27017/netflix", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("DB Connetion Successfull");
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

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

const express = require("express");
require("dotenv").config();
const cors = require("cors");
const connectDB = require("./config/db");
const restRoutes = require("./Routes/restRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/restaurants", restRoutes);

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT;
connectDB(MONGO_URI);

app.get("/", (req, res) => {
  res.send("Hello");
});
app.listen(9000, () => {
  console.log("server aslaa");
});

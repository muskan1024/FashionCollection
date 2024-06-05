const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./index");
const app = express();

const connectionString = "mongodb+srv://shaikhmuskan1024:muskan@cluster0.lpvvshc.mongodb.net/FashionCollection"
mongoose
  .connect(connectionString)
  .then((res) => console.log("Connected to FashionCollection db successfully"))
  .catch((ex) => console.log(ex));

app.use(cors());
app.use(express.json());


app.use("/", routes);
app.listen(3002, () => console.log("Listening on port 3002....."));

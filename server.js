const mongoose = require("mongoose");
var history = require('connect-history-api-fallback');

const body_parser = require("body-parser");
const contacts = require("./routes");
var cors = require("cors");

port = process.env.PORT || 3000

var express = require("express");
var app = express();

mongoose
  .connect("mongodb+srv://bob:1234@cluster0.kfyqj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Db Connected"))
  .catch(() => console.log("Error in connecting database"));

app.use(cors());
app.use(body_parser.json());
app.use("/", contacts);

if (process.env.NODE_ENV === 'production'){
  app.use(history()); 
  app.use(express.static('contact/dist'))
}

app.listen(port);

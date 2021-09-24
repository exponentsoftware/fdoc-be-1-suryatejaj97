const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const port = 8000;

// Routes
const todoRoutes = require("./routes/Todo");

const app = express();

// DB connection
mongoose
  .connect("mongodb://localhost:27017/todoapp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("CONNECTED TO DATABASE");
  });

app.use(cors());
app.use(bodyParser.json());

app.use("/api", todoRoutes);

app.listen(port, () => {
  console.log(`Listening to http://localhost:${port}`);
});

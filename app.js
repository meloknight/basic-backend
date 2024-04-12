const express = require("express");
const app = express();

// middleware
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/hi", (req, res) => {
  res.send("req");
});

const port = 3000;
app.listen(port, console.log(`Server is listening on port ${port}...`));

const express = require('express');
const cors = require('cors');
const data = require("./db.json");
const app = express();

app.use(cors());

// Get user list
app.get("/users", (req, res) => {
  res.status(200).json(data);
});

//Server listen
app.listen(3006, () => console.log("Server is running on port 3006"));

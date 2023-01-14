const path = require('path');
const express = require("express");

const PORT = process.env.PORT || 3001; //Heroku will set this value when we deploy our app

const app = express();

//------------------------------APIs-----------------------------
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

//-----------------------------------------------------------------
//------------------------------------------------------------------


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


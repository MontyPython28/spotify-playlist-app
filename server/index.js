const path = require('path');
const express = require("express");
const cors = require('cors');

const PORT = process.env.PORT || 3001; //Heroku will set this value when we deploy our app

const app = express();

// Configure CORS
app.use(cors({ origin: true, credentials: true }));

//------------------------------APIs-----------------------------
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

//-----------------------------------------------------------------
//------------------------------------------------------------------


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


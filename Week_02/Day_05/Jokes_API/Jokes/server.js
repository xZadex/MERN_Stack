const express = require("express");
const mongoose = require('mongoose');
const app = express();
const port = 8000;

require("./server/config/mongoose.config");

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

const AllMyJokeRoutes = require("./server/routes/jokes.routes");
AllMyJokeRoutes(app);

app.listen( port, () => console.log(`Listening on port: ${port}`) );
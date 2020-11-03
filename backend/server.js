const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose"); // connect to mongodb db

// CONFIGURATION ENVIRONMENT VARIABLES
require("dotenv").config();

const app = express();
const port = process.env.PORT || 2020;

app.use(cors()); // cors middleware
app.use(express.json()); // allow us to parse json

const connection = require('./config/config')
connection;
// MONGODB CONNECTION ESTABLISHMENT 
// const uri = process.env.ATLAS_URI;
// mongoose.connect(uri, {useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true, useUnifiedTopology: true });
// const connection = mongoose.connection;
// connection.once('open', () => {
//     console.log("MongoDB database connection established successfully");
// })


const exercisesRouter = require("./routes/exercises")
const usersRouter = require("./routes/users")

app.use('/exercises', exercisesRouter)
app.use('/users', usersRouter)

 

// SERVER STARTUP
app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});

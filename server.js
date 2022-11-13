const express = require("express");
const dotenv = require('dotenv').config();
const colors = require("colors");
const {errorHandler} = require("./middleware/errorMiddleware");
const port = process.env.PORT || 5000;
const connectDB = require("./config/db");
const cors = require("cors");
const path = require('path');

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'moviefrontend', 'build')));
app.use(cors())



app.use("/",require("./routes/router"));


app.use(errorHandler);
app.listen(port,()=>console.log(`Server started at port ${port}`.blue.bold));
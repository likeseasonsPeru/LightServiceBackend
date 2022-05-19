const  express = require('express');
const cors = require('cors');
const logger = require('morgan');
const connectToDb = require('./db/db');
const user = require('./routes/User.routes');
const app = express();
require('dotenv').config()


// DataBase
connectToDb()

// Middlewares
app.use(cors());
app.use(logger('tiny'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use(user)



module.exports = app;
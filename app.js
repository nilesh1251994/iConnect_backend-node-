require('./config/config');
require('./models/db');
require('./config/passportConfig');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');

const Index = require('./routes/router');

var app = express();

// middleware
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());
app.use('/api', Index);



// start server
app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`));
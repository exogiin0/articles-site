// importing packages
require('express-async-errors');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');

// db config
const db = require('./config/keys').mongoURI;

//Connect mongodb
mongoose.connect(db, ).then(() => {
    console.log('Mongodb connected')
}).catch((e) => {console.log(e, 'mongodb connection error')} );

// View Engine
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

// static
app.use('/public', express.static('public'));

// method override
app.use(methodOverride('_method'));

// routes
app.use('/', require('./routes/index'));
app.use('/articles', require('./routes/articles'));

// error function
app.use(function (err, req, res, next) {
    res.status(500).send('An unexpected server error occurred');
});

const PORT = process.env.PORT || 7000;
app.listen(PORT, console.log(`Server running on  ${PORT}`));
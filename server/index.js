const express = require('express');
const app = express();

//mongo db connect
const config = require('./config/key');
const mongoose = require('mongoose');
mongoose.connect(config.mongoURI, {})
        .then(()=> console.log('MongoDB connected...!'))
        .catch(err => console.log(err));


//서버 port
const port = 4000;
app.listen(port, ()=>console.log(`example app listening on port ${port}`));
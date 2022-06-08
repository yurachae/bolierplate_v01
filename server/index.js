const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//mongo db connect
const config = require('./config/key');
const mongoose = require('mongoose');
mongoose.connect(config.mongoURI, {})
        .then(()=> console.log('MongoDB connected...!'))
        .catch(err => console.log(err));

//express에서 사용하도록 use로 등록
app.use(bodyParser.urlencoded({extended:true})); //application/x-www-form-urlencoded
app.use(bodyParser.json()); //application/json
app.use('/api/users', require('./routes/Users'));


//서버 port
const port = 4000;
app.listen(port, ()=>console.log(`example app listening on port ${port}`));
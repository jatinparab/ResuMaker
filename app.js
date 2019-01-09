var express = require("express");
var mongoose = require("mongoose");
var bodyparser = require("body-parser");
var cors = require('cors');
var path = require('path');

var app = express();

const route = require('./routes/route');

app.use('/api',route);
app.use(cors());
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname,'public')));
const port = 3000;

app.get('/',(req,res)=>{
    res.send("Test");
})ojojo

app.listen(port, ()=>{
    console.log("Listening on port: "+port);
});
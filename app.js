var express = require('express');
var path = require('path');
require('dotenv').load();

//my code 
var whoiam = require('./api/whoiam.js');
//end 
var app = express();

app.use(express.static(path.join(__dirname, 'public')));

//mycode
app.use('/api/whoiam', whoiam); 
//end

app.listen(process.env.PORT, function () {
  console.log('Example app listening on port ', process.env.PORT);
});

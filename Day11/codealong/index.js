//base npm modules
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

//controller code 
var dogCtrl = require('./controllers/dogCtrl');
var userCtrl = require('./controllers/userCtrl.js');
// session authentication requires from npm

var session = require('express-session');
var passport = require('passport');
var config = require('./config/config.js');
var app = express();

require('./passport/passport.js')(passport); //invokes while require


app.use(session(config));
app.use(passport.initialize());
app.use(passport.session());


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + '/public'));

app.post('/auth', passport.authenticate('local-signup'), userCtrl.login);

app.post('/dogs', dogCtrl.create);
app.get('/dogs', dogCtrl.read);
app.put('/dogs/:id', dogCtrl.update);
app.delete('/dogs/:id', dogCtrl.delete);

mongoose.connect("mongodb://localhost:27017/dogs");
mongoose.connection.once('open', function(){
  console.log("Connected to mongoDB");
});

app.listen(8000, function(){
  console.log("listening to 8000");
});

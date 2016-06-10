var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();  //running express and assigning to app variable

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + '/views')); //setting views folder

var animalControl = require('./controllers/animalControl.js');

// need to provide all CRUD functions here
app.post('/animals', animalControl.create);

app.get('/animals', animalControl.read);


//works with chokidar to reload data
if (process.env.NODE_ENV === 'production') {
  console.log('Running in production mode');

  app.use('/static', express.static('static'));
} else {
  // When not in production, enable hot reloading

  var chokidar = require('chokidar');
  var webpack = require('webpack');
  var webpackConfig = require('./webpack.config.dev');
  var compiler = webpack(webpackConfig);
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }));
  app.use(require('webpack-hot-middleware')(compiler));

  // Do "hot-reloading" of express stuff on the server
  // Throw away cached modules and re-require next time
  // Ensure there's no important state in there!
  var watcher = chokidar.watch('./server');
  watcher.on('ready', function() {
    watcher.on('all', function() {
      console.log('Clearing /server/ module cache from server');
      Object.keys(require.cache).forEach(function(id) {
        if (/\/server\//.test(id)) delete require.cache[id];
      });
    });
  });
}


mongoose.connect("mongodb://localhost:27017/react_practice"); //give name to mongo
mongoose.connection.once('open', function(){
	console.log("Connected to your database.");
});


app.get('/', function(req, res){
	res.render('index');
});


//can change to any port
app.listen(7000, function(){ 
	console.log("The magic happens on port 7000");
});

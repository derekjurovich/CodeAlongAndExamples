var React       = require('react'),
    ReactRouter = require('react-router'),
    Router      = ReactRouter.Router,
    Route       = ReactRouter.Route,
    IndexRoute  = ReactRouter.IndexRoute,
    Main        = require('./../components/Main.js'),
    Home        = require('./../components/Home.js'),
    About       = require('./../components/About.js');

var routes = (
  <Router>
    <Route path='/' component={Main}>
      <Route path='/home' component={Home}/>
      <Route path='/about' component={About}/>
    </Route>
  </Router>
);

module.exports = routes;

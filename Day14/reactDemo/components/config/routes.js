var React = require('react');
var ReactDom = require('react-dom');
// var ReactRouter = require('react-router'); //only advantage to declaring variable instead of below is change name to whatever you want
// var Route = ReactRouter.Route;
// var Router = ReactRouter.Router;
// var IndexRoute = ReactRouter.IndexRoute;
// var hashHistory = ReactRouter.hashHistory; //not sure what this is for but fixes an error

import {Router, Route, hashHistory, IndexRoute} from 'react-router'; //replaces the above 5 lines
//put router in same file instead of separate and inporting
//component requires
var Main = require('./../main');
var Home = require('./../home');
var Animals = require('./../animals');
var About = require('./../about');
var Welcome = require('./../welcome');

//setup routers 
ReactDom.render(
	(<Router history={hashHistory}>
		<Route path='/' component = {Main}>
			<IndexRoute  component ={Welcome}/>
			<Route path='/home'  component = {Home}/>
			<Route path='/animals'  component = {Animals}/>
			<Route path='/about'  component = {About}/>
			<Route path='/welcome'  component = {Welcome}/>
		</Route>	
	</Router>),
	document.getElementById('app')
);


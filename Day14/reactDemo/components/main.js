var React = require('react');
var Link = require('react-router').Link;

//use className instead of class so that you can call in CSS

var Main = React.createClass({
	render: function(){
		return (
			<div>
				<div className="container jumbotron">
					<Link to='/home'>
						<button className="btn btn-success">Home</button>
					</Link>
					<Link to='about'>
						<button className="btn btn-success">About</button>
					</Link>
					<Link to="animals">
						<button className="btn btn-success">Animals</button>
					</Link>	
					<Link to="welcome">
						<button className="btn btn-success">Welcome</button>
					</Link>	
					<h2 className="theTitle">Hello from Derek's awesome page!</h2>
					<p> This is some nonsense text This is some nonsense text This is some nonsense text</p>
					
					{this.props.children}
				</div>	
			</div>
			)
	}
});

module.exports = Main;
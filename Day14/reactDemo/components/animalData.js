//this.props is down line from the this.state

var React = require('react');

var AnimalData = React.createClass({
	render: function(){

		return (
			<div>
				<h3>My name is { this.props.name } </h3>
				<h3>I am a member of { this.props.species } </h3>
				<h3>I live in the { this.props.habitat } </h3>
				<h3>I love to eat { this.props.diet } </h3>
			</div>

		)

	}


});

module.exports = AnimalData;

var React = require('react');
var AnimalPostForm = require('./animalPostForm.js');

var AnimalPostData = React.createClass({
	getInitialState: function(){
		return{
			name: null,
			species: null,
			habitat: null,
			diet: null
		}
	},

	handleNameChange: function(event){
		this.setState({name: event.target.value })
	},

	handleSpeciesChange: function(event){
		this.setState({species: event.target.value })
	},

	handleHabitatChange: function(event){
		this.setState({habitat: event.target.value })
	},

	handleDietChange: function(event){
		this.setState({diet: event.target.value })
	},

	handleAnimalSubmit: function(event){
		event.preventDefault();

		var animal = {};
		animal.name = this.state.name;
		animal.species = this.state.species;
		animal.habitat = this.state.habitat;
		animal.diet = this.state.diet;

		this.handleNewAnimalPost(animal);
		this.setState({name: '', species:'', color:'', age:''});
	},

//data not in quotes because passing a parameter object
	handleNewAnimalPost: function(animal){
		$.ajax({
				method: 'POST',
				url: '/animals',
				dataType: 'json',
				data: animal,
				success: function(data){
					this.props.getAllAnimalsFromServer();
				}.bind(this),
				error: function(xhr, status, err){
					console.error('/animals', status, err.toString())
				}.bind(this)
		})
	},

	render: function(){

		return (
			<div>
				<AnimalPostForm handleAnimalSubmit={this.handleAnimalSubmit}
								handleNameChange={this.handleNameChange}
								handleSpeciesChange={this.handleSpeciesChange}
								handleHabitatChange={this.handleHabitatChange}
								handleDietChange={this.handleDietChange}/>
			</div>
			)
	}

});

module.exports = AnimalPostData;

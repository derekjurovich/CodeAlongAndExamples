// create a map on all parent pages for the child lineage 
//Animals (parent)
//	AnimalData (children)
//	AnimalPostData (children)
// 		AnimalPostForm (child of child)

var React = require('react');
var AnimalData = require('./animalData.js');
var AnimalPostData = require('./animalPostData.js');




var Animals = React.createClass({

	getInitialState: function(){
		return {
			animals: []
		}

	},

	getAllAnimalsFromServer: function(){
		var self = this; //see this a lot in react 
		$.ajax({
			method: 'GET',
			url: '/animals'
		}).done(function(data){
			console.log(data);
			self.setState({animals: data})
		}) //done or then depends
	},


	componentDidMount: function(){
		this.getAllAnimalsFromServer();
	},

	render: function(){
//this is where you put javascript code to do stuff
 //looks for the animals with initial state above
 //for error handlign put in key
		var creatures = this.state.animals.map(function(item){
			return <AnimalData 	name={ item.name }
								species={ item.species }
								habitat={ item.habitat }
								diet={ item.diet }
								key={ item._id } 
								/> 
		});



		return (<div>
			{ creatures }
			<AnimalPostData getAllAnimalsFromServer={this.getAllAnimalsFromServer}/>
				</div>)

	}

});

module.exports = Animals;
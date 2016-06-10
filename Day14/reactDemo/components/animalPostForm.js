var React = require('react');

var AnimalPostForm = React.createClass({
	render: function(){
		return (
				<div>
					<div className="container">
						<form className="form-inline" onSubmit={this.props.handleAnimalSubmit} >
							<div className="form-group">
								<label> Name </label>
								<input type="text" className="form-control" placeholder="Name" 
								onChange={this.props.handleNameChange}
								value={this.props.name}/>
							</div>
							<div className="form-group">
								<label> Species </label>
								<input type="text" className="form-control" placeholder="Species"
								onChange={this.props.handleSpeciesChange}
								value={this.props.species}/>
								 
							</div>
							<div className="form-group">
								<label> Habitat </label>
								<input type="text" className="form-control" placeholder="Habitat"
								onChange={this.props.handleHabitatChange}
								value={this.props.habitat}/>
							</div>
							<div className="form-group">
								<label> Diet </label>
								<input type="text" className="form-control" placeholder="Diet"
								onChange={this.props.handleDietChange}
								value={this.props.diet}/>
							</div>
							<button type="submit" className="btn btn-primary">Post Animal</button>
						</form>
					</div>
				</div>
			)
	}

});

module.exports = AnimalPostForm;
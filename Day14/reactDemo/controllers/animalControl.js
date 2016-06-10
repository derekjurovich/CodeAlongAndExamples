var AnimalModel = require('./../models/animalmodel.js'); //capitalized because it is a constructor

module.exports = {
	create: function(req, res, next){
		var animal = new AnimalModel(req.body);
		animal.save(function(err, result){
			if(err){  //always include error handling
				res.send(err);
			} else {
				res.send(result);
			}
		}); //mongoose mthod to save to database
	},


	read: function(req, res, next){
		AnimalModel
		.find()
		.exec(function(err, result){  //callback function 
			if (err) {
					res.send(err);
			} else {
				res.send(result);
			}
		});
  	}
};
var mongoose = require('mongoose');
var bCrypt = require('bcrypt-nodejs');


//syntax for creating new schema
// what is the new again?? have a refesh on this. 
var userSchema = new mongoose.Schema ({
	email: {type: String, required: true, unique: true},
	password: {type: String, required: true},
	name: {type: String},
	shoeSize: {type: Number}
});


userSchema.methods.generateHash = function(password) {
	return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null); //nrrf null just required
};
userSchema.methods.validPassword = function(password){

	return bCrypt.compareSync(password, this.password);
}


module.exports = mongoose.model('User', userSchema); //what is this doing again?


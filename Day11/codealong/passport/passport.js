// template and just use this file and modify 

//need two things 

//local strategy

var LocalStrategy = require('passport-local').Strategy; // this is a constructor and why both are capitalized not camelhump
var User = require('./../models/userModels.js');

module.exports = function(passport) {

// this is what?? and done is to say when it is completed
// serialize
	passport.serializeUser(function(user, done){
		console.log("User: ", user);
		done(null, user.id);
	});
		
// deserialize
	passport.deserializeUser(function(id, done){
		//would do find by id
		console.log("User id is:", id);
		User.findById(id, function(err, user) {
			done(err, user);
		})
	});

	// setup local strategy and  login logic and register new account

	//constructor function
	passport.use('local-signup', new LocalStrategy({
		//local strategy object
		//if you change requirements for login you need to change all references to it here!!
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback: true //this negates the requirement for second callback function

	}, 

	function(req, email, password, done) {
		//node function that waits for next available spot to process
		process.nextTick(function() {

			User.findOne({'email': email}, function(err, user){
				if(err) return done(err); //does not need brackets if one line
					if(user) {
						if (user.validPassword(password)) {
							console.log("Valid Password !!");
							return done(null, user);
						}
						else {
							console.log("Invalid Password !!");
							return done(null, false); 
						}
					}
				else{
					var newUser = new User(req.body);
					newUser.email = email;
					newUser.password = newUser.generateHash(password);
					newUser.save(function(err){
						if (err) throw err;
						return done(null, newUser);
					});
				}
			});
		});
	}));
};

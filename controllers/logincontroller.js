var Login = require('../models/login');

exports.createLogin = function(req,res,next){

	var loginOb = new Login({
		username:req.body.username,
		password:req.body.password
	})

	loginOb.save(function(err){
		if(err){
			res.json({error:"LoggedIn Error"});
			console.log(err);
			
		}
		else{
			res.json({msg:"Login successfully"})
			console.log("success");

		}
	})
}

	exports.getLogin = function(req,res,next){
		Login.find()
		.exec(function(err,login_lists){
			res.json(login_lists)
		})
}

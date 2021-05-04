var State = require('../models/state');

exports.createState = function(req,res,next){

	var stateOb = new State({
		state_name:req.body.state_name,
	})

	stateOb.save(function(err){
		if(err){
			res.json({error:"Cant saved State"});
			console.log(err);

		}
		else{
			res.json({msg:"State saved successfully"})
			console.log("success");
			
		}
	})
}

	exports.getState = function(req,res,next){
		State.find()
		.exec(function(err,state_lists){
			res.json(state_lists)
		})
}

var Child = require('../models/child');

exports.createChild = function(req,res,next){

	var childOb = new Child({

	name : req.body.name,
	sex : req.body.sex,
	date_of_birth : req.body.date_of_birth,
	father_name : req.body.father_name,
	mother_name : req.body.mother_name,
	state : req.body.state,
	district: req.body.district,
	})

	childOb.save(function(err){
		if(err){
			res.json({error:"cant Save Child"});
			console.log(err);

		}
		else{
			res.json({msg:"Child saved successfully"})
			console.log("success");
			
		}
	})
}

	exports.getChild = function(req,res,next){
		Child.find()
		.exec(function(err,child_lists){
			res.json(child_lists)
		})
}

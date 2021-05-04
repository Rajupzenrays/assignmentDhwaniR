var District = require('../models/district');

exports.createDistrict = function(req,res,next){

	var districtOb = new District({
		district_name:req.body.district_name,
	})

	districtOb.save(function(err){
		if(err){
			res.json({error:"Cant save District"});
			console.log(err);

		}
		else{
			res.json({msg:"District saved successfully"})
			console.log("success");
			
		}
	})
}

	exports.getDistrict = function(req,res,next){
		District.find()
		.exec(function(err,district_lists){
			res.json(district_lists)
		})
}

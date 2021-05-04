var mongoose = require('mongoose');

var ChildSchema = new mongoose.Schema({

	name : {type:String},
	sex : {type:String},
	date_of_birth : {type:Date},
	father_name : {type:String},
	mother_name : {type:String},
	state : {type:String}, 
	district: {type:String},
})

module.exports = mongoose.model('Child',ChildSchema);
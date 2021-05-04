var mongoose = require('mongoose');

var DistrictSchema = new mongoose.Schema({

	district_name:{type:String}
})

module.exports = mongoose.model('District',DistrictSchema);
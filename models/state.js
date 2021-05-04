var mongoose = require('mongoose');

var StateSchema = new mongoose.Schema({

	state_name:{type:String}
})

module.exports = mongoose.model('State',StateSchema);
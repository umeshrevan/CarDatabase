const mongoose = require('mongoose')
const customerSchema = mongoose.Schema({
	sCustomerName:{
		type:String,
		required:[true,'Please add a add name']
	},

	sCity:{
		type:String,
		required:[true,'Please add a city']
		
	}
})
const Customer = mongoose.model('customer',customerSchema)
module.exports = Customer
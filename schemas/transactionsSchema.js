const mongoose = require('mongoose')
const transactionSchema = new mongoose.Schema({
	userId:{
		type:mongoose.Schema.Types.ObjectId,
		ref:'users'
	},

	sellerId:{
		type:mongoose.Schema.Types.ObjectId,
		ref:'sellers'
	},

	sCity:{
		type:String,
		required:[true,'Please add a city name'],
	},

	carDetails:{
		type:mongoose.Schema.Types.ObjectId,
		ref:'cars'
	},

	nPrice:{
		type: Number,
		required:[true]
	}
},{timestamps:true})
const Transactions = mongoose.model('transactions',transactionSchema)
module.exports = Transactions
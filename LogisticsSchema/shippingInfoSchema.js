const mongoose = require('mongoose')
const shippingSchema = mongoose.Schema({
	iCustomerId:{
		type:mongoose.Schema.Types.ObjectId,
		ref:'customer'
	},
	sOrigin:{
		type:String,
		required:[true,'Please add a city']
	},
	sDestination:{
		type:String,
		required:[true,'Please add a city']
	},
	dOrderdate:{
		type:Date,
		default: Date.now
	},
	dDeliverdate:{
		type:Date   //Expected Delivery Date
	},
	sStaus:{
		type:String,
		enum:['pending', 'In Transit', 'Delivered'],
		default: 'pending'
	},
	iDriverId:{
		type:mongoose.Schema.Types.ObjectId,
		ref:'driver'
	}
})
const Shipping = mongoose.model('shipping',shippingSchema)
module.exports = Shipping
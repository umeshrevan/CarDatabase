const mongoose = require('mongoose')
const sellersSchema = new mongoose.Schema({
	sSellerName:{
		type:String,
		required:[true,'Please add a seller name'],
		ref:'brands'
	},

	sCity:{
		type:String,
		required:[true,'Please add a city name'],
	},

	iCarId:{
		type:mongoose.Schema.Types.ObjectId,
		ref:'cars'
	}

},{timestamps:true})
const Sellers=mongoose.model('sellers',sellersSchema)
module.exports=Sellers
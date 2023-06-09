const mongoose = require('mongoose')
const carsSchema =  new mongoose.Schema({
	sCarName:{
		type:String,
		required:[true,'Please add a car name']
	},

	sCarModel:{
		type:Number,
		required:[true,'Please add a car model']
		
	},

	sBrand:{
		type:mongoose.Schema.Types.ObjectId,
		ref:'brands',
		required:[true]
	},
	nPrice:{
		type: Number,
		required:[true]
	}

},{timestamps:true})
const Cars=mongoose.model('cars',carsSchema)
module.exports=Cars
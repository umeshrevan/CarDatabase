const mongoose = require('mongoose')
const usersSchema = new mongoose.Schema({
	sUserName:{
		type:String,
		required:[true,'Please add a user name'],
		//ref:['sellers', 'cars']
	},

	sPassword:{
		type:String,
		required:[true,'Please add a password'],
	},

	sCity:{
		type:String,
		required:[true,'Please add a city name'],
	},

	sRole:{
		type:String,
		required:[true,'Please add a role'],
	},

	iCarId:{
		type:mongoose.Schema.Types.ObjectId,
		ref:'cars'
	}

},{timestamps:true})
const Users=mongoose.model('users',usersSchema)
module.exports=Users
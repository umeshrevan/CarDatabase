const mongoose = require('mongoose')
const driverSchema = mongoose.Schema({
	sDriverName:{
		type:String,
		required:[true,'Please add a add name']
	},

	sCity:{
		type:String,
		required:[true,'Please add a city']
		
	},
	nMobileno:{
		type:Number,
		required:[true,'Please add mobile number']
	}
})
const Driver = mongoose.model('driver',driverSchema)
module.exports = Driver
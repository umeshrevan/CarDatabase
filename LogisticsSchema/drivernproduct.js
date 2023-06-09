const mongoose = require('mongoose')
const drivernproductSchema = mongoose.Schema({
	iDriverId:
		{
			type:mongoose.Schema.Types.ObjectId,
			ref:'driver'
		},
	iProductId:
		{
			type:mongoose.Schema.Types.ObjectId,
			ref:'product'
		}
})
const DriverProduct = mongoose.model('driverNproduct',drivernproductSchema)
module.exports = DriverProduct
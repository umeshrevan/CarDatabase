const mongoose = require('mongoose')
const customernproductSchema = mongoose.Schema({

	iCustomerId:
		{
			type:mongoose.Schema.Types.ObjectId,
			ref:'customer'
		},

	iProductId:
		{
			type:mongoose.Schema.Types.ObjectId,
			ref:'product'
		}
})
const CustomerProduct = mongoose.model('customerNproduct',customernproductSchema)
module.exports = CustomerProduct
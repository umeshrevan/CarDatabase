const mongoose = require('mongoose')
const shippingnproductSchema = mongoose.Schema({
	iProductId:
		{
			type:mongoose.Schema.Types.ObjectId,
			ref:'product'
		},
	iShippingId:
		{
			type:mongoose.Schema.Types.ObjectId,
			ref:'shippingInfo'
		}		
})
const ShippingProduct = mongoose.model('shippingNproduct',shippingnproductSchema)
module.exports = ShippingProduct
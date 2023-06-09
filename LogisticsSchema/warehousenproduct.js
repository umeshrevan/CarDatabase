const mongoose = require('mongoose')
const warehousenproductSchema = mongoose.Schema({

	iWarehouseId:
		{
			type:mongoose.Schema.Types.ObjectId,
			ref:'warehouse'
		},

	iProductId:
		{
			type:mongoose.Schema.Types.ObjectId,
			ref:'product'
		}
})
const WarehouseProduct = mongoose.model('warehouseNproduct',warehousenproductSchema)
module.exports = WarehouseProduct
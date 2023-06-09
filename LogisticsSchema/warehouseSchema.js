const mongoose = require('mongoose')
const warehouseSchema = mongoose.Schema({
	sWarehouseName:{
		type:String,
		required:[true,'Please add a warehouse name']
	},

	sLocation:{
		type:String,
		required:[true,'Please add a location']
		
	}
})
const Warehouse = mongoose.model('warehouse',warehouseSchema)
module.exports = Warehouse
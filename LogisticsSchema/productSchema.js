const mongoose = require('mongoose')
const productSchema = mongoose.Schema({
	sProductName:{
		type:String,
		required:[true,'Please add a product name']
	},
	nQuantitiy:{
		type:Number,
		required:[true, 'Please enter quantity']
	}
},{timestamps:true})
const Product = mongoose.model('product',productSchema)
module.exports = Product
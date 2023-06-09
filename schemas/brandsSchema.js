const mongoose = require('mongoose')
const brandsSchema = new mongoose.Schema({
	sBrand:{
		type:String,
		required:[true,'Please add a brand name'],
		enum:['Mahindra', 'Tata', 'Volvo', 'Mercedes', 'BMW']
	}
},{timestamps:true})
const Brands=mongoose.model('brands', brandsSchema)
module.exports=Brands
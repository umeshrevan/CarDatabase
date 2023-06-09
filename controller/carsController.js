const Brands = require('../schemas/brandsSchema')
const Cars = require('../schemas/carsSchema')
const {status, message} = require('../messages/messages')

const cars = async(req,res)=>{
	
	const {sCarName, sBrand, sCarModel, nPrice} = req.body
	const brandId = await Brands.findOne({_id: sBrand}) //find brand in brands table
	if(!brandId){
		res.status(status.badrequest).json(message.dataNotFound)
	}
	else
	{
		const car = {
			sCarName,
			sCarModel,
			sBrand:brandId._id,
			nPrice
		}
	
		const data = await Cars.create(car)
		if(data){
			res.status(status.statusSuccess).json(data)
		}
		else{
			res.status(status.badrequest).json(message.dataNotFound)
		}
	}
}

const getCars= async (req, res) => {
	let data = await Cars.find()
	res.status(status.statusSuccess).json(data)
}

module.exports = {cars, getCars}
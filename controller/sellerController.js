const Cars = require('../schemas/carsSchema')
const Seller = require('../schemas/sellersSchema')
const {status, message} = require('../messages/messages')
const seller = async(req, res)=>{
	
	const {sSellerName, sCity, sCarName} = req.body
	const carId = await Cars.findOne({_id: sCarName})
	if(!carId){
		res.status(status.badrequest).json(message.dataNotFound)
	}
	else{
		const seller = {
			sSellerName,
			sCity,
			iCarId:carId._id
		}
		const data = await Seller.create(seller)
		if(data){
			res.status(status.statusSuccess).json(data)
		}
		else{
			res.status(status.badrequest).json(message.dataNotFound)
		}

	}
	
	// 	.then( res => console.log('success',res))
	// 	.catch(err => console.log('>>err', err))
	// console.log(data)
	// res.send(data)
}
module.exports = {seller}
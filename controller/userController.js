const Cars = require('../schemas/carsSchema')
const Users = require('../schemas/usersSchema')
const Transactions = require('../schemas/transactionsSchema')
const Sellers = require('../schemas/sellersSchema')
const {status, message} = require('../messages/messages')

const user = async(req,res)=>{
	const {sUserName, sPassword, sCity, sRole, sCarName} = req.body
	const carId = await Cars.findOne({_id: sCarName})
	if(!carId){
		res.status(status.badrequest).json(message.dataNotFound)
	}
	else{
		const user = {
			sUserName,
			sPassword,
			sCity,
			sRole,
			iCarId:carId._id		
		}
		const data = await Users.create(user)
		if(data){
			res.status(status.statusSuccess).json(data)
		}
		else{
			res.status(status.badrequest).json(message.dataNotFound)
		}
	}		
}

const transaction = async(req,res)=>{
	const {sUserName, sSellerName, sCarName} = req.body
	const userId = await Users.findOne({_id: sUserName})
	const sellerId = await Sellers.findOne({_id: sSellerName})
	const carId = await Cars.findOne({_id: sCarName})				
	if(!userId && !sellerId && !carId){
		res.status(status.badrequest).json(message.dataNotFound)
	}
	else{
		const transaction = {
			userId:userId._id,
			sellerId:sellerId._id,
			sCity:userId.sCity,
			carDetails:carId._id,
			nPrice:carId.nPrice		
		}
		const data = await Transactions.create(transaction)
		if(data){
			res.status(status.statusSuccess).json(data)
		}
		else{
			res.status(status.badrequest).json(message.dataNotFound)
		}

	}	
}

const roleVerify = async(req, res, next)=>{
	const {sUserName} = req.body
	const userId = await Users.findOne({_id: sUserName})
	const sRole = userId.sRole
	if(sRole === 'Admin'){
		//res.send('Authorized')
		next()
	}
	else{
		res.status(status.badrequest).json(message.forbidden)
	}
}

module.exports = {user, transaction, roleVerify}
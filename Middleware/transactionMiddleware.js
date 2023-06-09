
const Users = require('../schemas/usersSchema')
// const Transactions = require('../schemas/transactionsSchema')
const Sellers = require('../schemas/sellersSchema')
const cityVerify = async(req,res,next)=>{
	const {sUserName, sSellerName} = req.body
	const userId = await Users.findOne({_id: sUserName})
	const sellerId = await Sellers.findOne({_id: sSellerName})
				
	const userCity = userId.sCity
	const sellerCity = sellerId.sCity
	if(userCity === sellerCity){
		next()
	}
	else{
		res.send('City not matched')
	}

}
module.exports = {cityVerify}
const Transactions = require('../schemas/transactionsSchema')

const adminDash = async(req, res)=>{
	const TotalCarSold = await Transactions.countDocuments()

	const mostSoldCity = await Transactions.aggregate( [
		{     $group: {
			_id: '$sCity',
			CarSoldCity: {
				$sum: 1
			}
		},},
            
		{$sort:{
			CarSoldCity: -1
		}},

		{$limit:1}    
	] )

	const mostSoldCar = await Transactions.aggregate( [
		{
			$group:{
				_id: '$carDetails',
				MostSoldCar: {
					$sum: 1
				}
			}},
		{
			$lookup:{
					
				from: 'cars',
				localField: '_id',
				foreignField: '_id',
				as: 'MostSoldCar',
				pipeline: [
					{
						$project: {
							_id: 0,
							sCarName: 1
						},
					},
				],
					
			}
		},
            
		{$sort:{
			MostSoldCar: -1
		}},
		{
			$limit: 1
		} 
              
	] )

	const mostSoldBrand = await Transactions.aggregate( [
		{
			$lookup:{
				from: 'cars',
				localField: 'carDetails',
				foreignField: '_id',
				as: 'carData',
			}
		},
		{
			$lookup:{
				from: 'brands',
				localField: 'carData.sBrand',
				foreignField: '_id',
				as: 'brandData',
			}
		},
		{
			$unwind:{
				path: '$brandData'
			}
		},
		{
			$group:{
				_id: '$brandData.sBrand',
				Count: {
					$sum: 1
				}
			}
		},
            
		{$sort:{
			MostSoldBrand: -1
		}},
		{
			$limit: 1
		}       
	] )

	res.json({TotalCarSold:TotalCarSold,MostSoldCar:mostSoldCar,mostSoldCity:mostSoldCity,mostSoldBrand:mostSoldBrand})
}
module.exports = {adminDash}

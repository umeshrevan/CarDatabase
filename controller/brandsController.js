const Brands = require('../schemas/brandsSchema')
const {status, message} = require('../messages/messages')


const brands = async (req, res) => {
	await Brands.create(req.body)
		.then( res => console.log('success',res))
		.catch(err => console.log('>>err', err))
	res.status(status.statusSuccess).json(message.brandAdd)
}

const getBrands = async (req, res) => {
	let data = await Brands.find()
	res.status(status.statusSuccess).json(data)

}

const deleteBrands = async (req, res) => {
	console.log(req.params)
	let data = await Brands.deleteOne(req.params)
	res.status(status.statusSuccess).json(data)
}

const updateBrands = async (req, res) => {
	console.log(req.params)
	let data = await Brands.updateOne(
		req.params,
		{$set: req.body}
	)
	res.status(status.statusSuccess).json(data)
}

module.exports = {brands, getBrands, deleteBrands, updateBrands}
const express = require('express')
require('../database/dbConnect')
//const routerBrands = express.Router()
const router = express.Router()

const {brands, getBrands, deleteBrands, updateBrands} = require('../controller/brandsController')
const {cars, getCars} = require('../controller/carsController')
const { seller } = require('../controller/sellerController')
const { user, transaction, roleVerify } = require('../controller/userController')
const {cityVerify} = require('../Middleware/transactionMiddleware')
const { adminDash } = require('../controller/adminController')

/* Routes for brands  */
//routerBrands.get('/brands')
router.post('/create', brands)
router.get('/getBrands', getBrands)
router.delete('/deleteBrands/:_id', deleteBrands)
router.put('/update/:_id',updateBrands)

/* Routes for cars  */
router.post('/cars', cars)
router.get('/getCars', getCars)
// router.delete('/deleteCars/:_id', deleteCars)
// router.delete('/updateCars/:_id', updateCars)

/* Routes for sellers  */
router.post('/seller', seller)

/* Routes for users  */
router.post('/user', user)
router.post('/user/buyCar', cityVerify,transaction)
/* Routes for admin  */
router.post('/admin', roleVerify, adminDash)


module.exports = router
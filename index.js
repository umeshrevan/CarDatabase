const express = require('express')
require('dotenv').config()
const config = require('./config/config')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
app.use(morgan('dev'))


const brandsRoute = require('./routes/routes')
const carsRoute = require('./routes/routes')
const sellerRoute = require('./routes/routes')
const userRoute = require('./routes/routes')
const connectDb = require('./database/dbConnect')
connectDb()
//const usersRoute = require('./routes/usersRoutes')
//const sellersRoute = require('./routes/sellersRoutes')


// demo
// const a = 1

// console.log(!a)

app.use('/', carsRoute)
app.use('/brands', brandsRoute)
app.use('/', sellerRoute)
app.use('/', userRoute)


// app.use('/users', usersRoute)
// app.use('/sellers', sellersRoute)


app.all('*', (req, res) => {
	res.json({ messages: 'No routes found' })
})

app.listen(config.port, () => {
	console.log(`Server listening on port ${config.port}`)
})
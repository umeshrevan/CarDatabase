const mongoose=require('mongoose')
const connectDb = async()=>{
	try {
		const conn=await mongoose.connect('mongodb+srv://umeshrevan:umeshrathva%4018@cluster0.1xxniuy.mongodb.net/CarDatabase')
		console.log('MongoDb connected '+ conn.connection.host)
	}
	catch(error){
		console.log(error)
		process.exit(1)
	}}

module.exports=connectDb
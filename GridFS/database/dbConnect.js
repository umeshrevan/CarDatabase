const mongoose=require('mongoose')
const connectDb = async()=>{
	try {
		const conn=await mongoose.connect('mongodb://127.0.0.1:27017/GridFS')
		console.log('MongoDb connected '+ conn.connection.host)
	}
	catch(error){
		console.log(error)
		process.exit(1)
	}}

module.exports=connectDb
const express = require('express')
const app = express()
const multer = require('multer')
const {GridFsStorage} = require('multer-gridfs-storage')
// const connectDb = require('./database/dbConnect')
// connectDb()

const fileStorage = new GridFsStorage({
	url: 'mongodb://127.0.0.1:27017/GridFS',
	file: (req, file) => {
		return new Promise((resolve) => {
			const filename = file.originalname
			const fileInfo = {
				filename: filename,
				bucketName: 'uploadBucket'
			}
			resolve(fileInfo)
		})
	}
})
const upload = multer({
	fileStorage
})
  
app.post('/upload', upload.single('file'), (req, res) => {
	if(req.file === undefined){
		res.status(404).send('File not found')
	}
	else{
		res.status(200).send('File uploaded successfully')
	}
})

app.listen(5000, () => {
	console.log('Server listening on port 5000')
})
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import product from './routes/product'
import brand from './routes/brand'

var app = express();
app.use(cors())

app.use("/api", brand)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
 

let port  = 8080

app.listen(port,   () => { 
	console.log('Running on localhost:'+port)
    defaultErrorHandler: false
    
})

import express from 'express';
import {Request,TYPES} from 'tedious'; 
import {connection} from '../config/db'
let router = express.Router()

// router.get('/productList', async(req,res) => {
//  let request = new Request('SELECT * FROM dbo.brands;',(err,rowCount,rows)=>{
//      console.log('result', rows)
//      res.status(200).json({status:'', data:rows})
//  })
//     connection.execSql(request)

// });




 module.exports=router;
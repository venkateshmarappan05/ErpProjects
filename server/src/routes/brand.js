import express from 'express';
import {connection,sql} from '../config/db'
let router = express.Router()

const BRANDS = 'dbo.brands'; 

router.get('/brandList', async(req,res) => {
    connection.then(data => {
        var request = new sql.Request();
        request.query(`SELECT * FROM ${BRANDS} where id = 1`, function (err, rslt) {
            if (err) console.log(err)
            res.status(200).json(rslt['recordset'])
        });
    }).catch(err => {
        res.status(500).json({ errors: 'Something went to wrong'});
    });
});

router.put('/deleteBrand', async(req,res) => {
    console.log(req)
    // connection.then(data =>{
    //     var request = new sql.Request();
    //     request.query(`DELETE FROM ${BRANDS} WHERE ID=' ${}`)
    // })
})

module.exports=router;

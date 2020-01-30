import sql from 'mssql';
var config = {
    user: 'SA',
    password: 'Appa@123',
    server: 'localhost', 
    database: 'SAMPLE' ,
    options:{
        enableArithAbort:false
    }
};

// var config = {
//     server: 'localhost',
//     authentication: {
//         type: 'default',
//         options: {
//             userName: 'SA',
//             password: 'Appa@123'
//         }
//     },
//     options: {
//         database: 'SAMPLE',
//         rowCollectionOnRequestCompletion:true
//     }
// }
var connection =sql.connect(config)

export { connection ,sql}
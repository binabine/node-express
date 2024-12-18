const {createDBPool} = require('../config/db');

let sqlExec = (req, res, next, {sql, timeout, values}) => {
    return new Promise((resolve, reject) => {
        const DB = createDBPool();
        DB.query({
            sql : sql || null,
            timeout : 10000 || null,
            values : values || null,
        }, (error, result) => {
            if(error){
                return reject(error);
            }else{
                return resolve(result);
            }
        })
    }
)}
module.exports = sqlExec
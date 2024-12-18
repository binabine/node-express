const mysql = require('mysql2');


const config = {
    host: "127.0.0.1",
    user: "rsa",
    password:"",
    database: "rsa"
};

    const options = {
        waitForConnections: true,
        connectionLimit: 10,
        maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
        idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
        queueLimit: 0,
        enableKeepAlive: true,
        keepAliveInitialDelay: 0,
    };

const createDBPoolOption = () => ({
    ...config,
    ...options
})

const createDBPool = () =>{
    try {
        console.log("Sukses Connect");
        return mysql.createPool(createDBPoolOption());     
    } catch (error) {
        console.log("Error connect DB", error);
        process.exit();      
    }
}

module.exports = {
    createDBPool
};
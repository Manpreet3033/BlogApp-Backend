const mongoose = require('mongoose')
require('dotenv').config()
const dbConnection = () => {
    mongoose.connect(process.env.DATABASE_URL,{
        useNewurlParser: true,
        useUnifiedTopology: true,
    }).then(()=>{console.log('DB Connected')}).catch((err)=>{console.log('DB Connection Failed')})
}

module.exports = dbConnection;
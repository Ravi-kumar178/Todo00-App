const mongoose = require('mongoose');
require('dotenv').config();

const dbConnect = ()=>{
    const DATABASE_URL = process.env.DATABASE_URL;
    if(!DATABASE_URL){
        console.log("Data base is not present");
    }

    mongoose.connect(DATABASE_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=>console.log("App is connected successfully"))
    .catch((err)=>{
        console.log("Error in db connection");
        console.log(err.message);
        process.exit(1);
    })
}

module.exports = dbConnect
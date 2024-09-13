const mongoose = require('mongoose')

// const URI = "mongodb://127.0.0.1:27017/mern_admin";
// mongoose.connect(URI);

const URI = process.env.MonGODB_URI;

const connectDb = async ()=>{
    try {
        await mongoose.connect(URI);
        console.log("Connection Successfull to DB");

        
    } catch (error) {
        console.log("Connection failed to DB");
        process.exit(0);
    }
}

module.exports = connectDb;
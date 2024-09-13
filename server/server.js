require("dotenv").config();
const express = require("express");
const cors = require("cors")
const app =  express();
const authRoute = require('./router/auth-router');
const contactRoute =require('./router/contact-router.js')
const serviceRoute = require('./router/service-router.js')
const adminRoute = require('./router/admin-router.js')
const connectDB = require('./utils/db.js');
const errorMiddleware = require("./middlewares/error-middleware.js");
require('dotenv').config({ path: '../.env' });
require('dotenv').config();




// Handle cors

const corsoptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credetials: true,
};
app.use(cors(corsoptions));


app.use(express.json());

app.use('/api/auth', authRoute);
app.use('/api/form', contactRoute);
app.use('/api/data', serviceRoute);
app.use('/api/admin', adminRoute);
app.use(errorMiddleware);

// app.get("/", (req,res) => {
//     res.status(200).send("Welcome to world best Admin Panel");
// });

// app.get("/register", (req,res) => {
//     res.status(200).send("Welcome to registration page");
// });

const PORT = 5000;

connectDB().then( ()=>{
app.listen(PORT, ()=>{
    console.log(`server is running at port: ${PORT}`);
    
});
});

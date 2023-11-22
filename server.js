const express = require('express')
const app = express()
const userRoutes = require("./routes/user.js")
require('dotenv').config()
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')

app.use(express.json())
//middleware
app.use(morgan('dev'))
app.use(bodyParser.json())
//routes middleware
app.use("/api", userRoutes)

mongoose.connect(process.env.DATABASE)
.then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log('Server is running at port 3000')
    });
    console.log('Database connected')
}).catch((err)=>{
    console.log(err)
});
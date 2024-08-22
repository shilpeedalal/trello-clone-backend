const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const authRoutes = require('./routes/authRoutes')

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000;
app.use(express.json())

connectDB()

app.use('/api/auth', authRoutes)

app.get("/", (req,res)=>{
    res.send("Hello world")
})

app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}`);
    
})
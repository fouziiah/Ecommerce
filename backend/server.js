require('dotenv').config()

const express = require('express')
const cors = require('cors')

const app = express()

const PORT = 8080

const connectDB = require('./config')
connectDB()

///imports products
const pR = require('./routes/productsRoutes')

app.use('/api/products', pR)

app.use(express.json())
app.use(cors())




// app.get('/test', (req, res)=>{
//     res.json('server: Hello Client')
// })

app.listen(PORT, ()=>{
    console.log(`Listening to the port: ${PORT}`)
})

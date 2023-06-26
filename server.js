const express = require ('express')
const app = express()
const db = require ('./db/db')
const routes = require('./routes/routes')
require('dotenv').config({path: ".env"})
const register = require('./routes/authRoutes')
const port = process.env.PORT || 5000


//middlewares
app.use(express.json())
db()
app.use('/items',routes)
app.use('/api',register)
app.use('/uploads',express.static('uploads'))
app.get('/', (req,res)=>{
    res.json({msg:`welcome to the home page`})
}) 



const server = app.listen(port,()=>{
    console.log(`listening on port ${port}`)
    //handeling errors
    process.on('unhandledREjection',err =>{
        console.log(`An error occured: ${err.message}`)
        server.close(()=>process.exit(1));
    })
})


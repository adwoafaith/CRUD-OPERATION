const express = require ('express')
const app = express()
const db = require ('./db/db')
const routes = require('./routes/routes')
require('dotenv').config()
const port = process.env.PORT || 5000


//middlewares
app.use(express.json())
app.use('/items',routes)
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


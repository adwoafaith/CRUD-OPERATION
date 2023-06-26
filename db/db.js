const  mongoose = require('mongoose')
// const schema = require ('../controllers/schema')

// const uri ="mongodb+srv://faithmensah:mymongoatlas055@youtubevideos.qedywra.mongodb.net/?retryWrites=true&w=majority";
const uri = "mongodb://localhost:27017/Employee"
//mongodb://localhost:27017/todo_app
 
 //mongodb://localhost:27017/
 //connect to the monogo database
 const connect = async()=>{
    try{
        await mongoose.connect(uri,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('connected to monogoDB')
    }catch(error)
    {
        console.log(`Error: ${error}`);
    }
 }

 connect();
 module.exports = connect;
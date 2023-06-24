const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//create the schema
const employeeSchema = new Schema({
    name:{
        type: String
    },
    designation:{
        type: String
    },
    email:{
        type: String
    },
    password:{
        type: String,
        require : true,
    },
    age:{
        type: Number
    }



},{timestamps:true})

const Employee = mongoose.model('Employee',employeeSchema)
module.exports = Employee;
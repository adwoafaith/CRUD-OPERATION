const { response } = require('express')
const Employee = require('../model/schema')

//showw all employee
const show =async (req, res,next) =>{
    Employee.find()
    .then(response =>{
        res.status(200).json({response})
    })
    .catch(error =>{
        res.status(400).json({message:"An error occured!"})
    })
}
// returning employee by id

const showEmployeeById = async(req, res, next) =>{
    const {EmployeeID} = req.body;
    Employee.findById(EmployeeID)
    .then(response =>{
        res.status(200).json({
            response
        })
    })
    .catch(error =>{
        res.status(400).json({
            message:"An error occured"
        })
    })

}
//adding employee to database
const addEmployee = async(req, res,next) =>{
    let employee = new Employee({
        name: req.body.name,
        designation: req.body.designation,
        email:req.body.email,
        password:req.body.password,
        age:req.body.age
    })//single file
    // if (req.file){
    //     Employee.avatar = req.file.path
    // }
    //multiple file uplad
    if(req.files){
        let path =''
        req.files.forEach(function(files,index,arr){
            path = path + files.path +','
        })
        path = path.substring(0,path.lastIndexOf(","))
        Employee.avatar = path
    }
    employee.save()
    .then(response =>{
        res.status(200).json({
            message:`employee created successfully`
        })
    })
    .catch(error=>{
        res.status(400).json({
           message:`An error occured` 
        })
    })
}

//updating an employee
const updateEmployeeById = async(req, res, next) => {
    let {employeeID} = req.body;
    //update the employee list
    let update = {
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        password: req.body.password,
        age:req.body.age 
    }
    Employee.findByIdAndUpdate(employeeID, {$set: update})
    .then(() =>{
        res.status(200).json({
            message:`Employee updated sucessfully`
        })
    })
    .catch(error =>{
        res.status(400).json({
            message:`An error occured`
        })
    })
}

//delete an employee
const deleteEmployeeById = async(req, res) =>{
    const {EmployeeID} = req.body
    //search through and delete
    Employee.findByIdAndRemove(EmployeeID)
    .then(()=>{
        res.status(200).json({
            message:`Employee deleted sucessfully`
        })
    })
    .catch(error =>{
        res.status(400).json({
            message:`An error occured`
        })
    })
}










module.exports = 
{
    show,
    showEmployeeById,
    addEmployee,
    updateEmployeeById,
    deleteEmployeeById,
};
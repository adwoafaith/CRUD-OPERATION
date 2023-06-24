const express = require('express')
const router = express.Router()
const controller = require('../controllers/controllers')



router.get('/all',controller.show)
router.get('/id',controller.showEmployeeById)
router.post('/add',controller.addEmployee)
router.put('/update',controller.updateEmployeeById)
router.delete('/delete',controller.deleteEmployeeById)





module.exports = router;
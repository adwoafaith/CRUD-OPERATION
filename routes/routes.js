const express = require('express')
const router = express.Router()
const controller = require('../controllers/controllers')
const upload = require('../middleware/upload')


router.get('/all',controller.show)
router.get('/id',controller.showEmployeeById)
//single file
router.post('/add',upload.single('avatar'),controller.addEmployee)
//multiple files
router.post('/add',upload.single('avatar[]'),controller.addEmployee)
router.put('/update',controller.updateEmployeeById)
router.delete('/delete',controller.deleteEmployeeById)





module.exports = router;
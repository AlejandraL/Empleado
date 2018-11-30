const express = require ('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

router.get('/employee', employeeController.list);
router.post('/employee/add', employeeController.add);
router.get('/employee/update/:id_employee', employeeController.edit);
router.post('/employee/update/:id_employee', employeeController.update);
router.get('/employee/delete/:id_employee', employeeController.delete);

module.exports=router;
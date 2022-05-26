const express = require("express");
const router = express.Router();
const {getEmployeeController,
        getEmployeeByIdController, 
        createEmployeeController,
        updateEmployeeController, 
        deleteEmployeeController} = require('../controllers/controller');

router.get('/', getEmployeeController);

router.get('/:id', getEmployeeByIdController);

router.post('/', createEmployeeController);

router.put('/:id', updateEmployeeController);

router.delete('/:id', deleteEmployeeController);

module.exports = router;
const express = require("express");
const router = express.Router();
const {createDepartmentController,
     getDepartmentController,
     getDepartmentByIdController,
     updateDepartmentController,
     deleteDepartmentController} = require('../controllers/departmentController');

router.get('/', getDepartmentController);

router.get('/:id', getDepartmentByIdController);

router.post('/', createDepartmentController);

router.put('/:id', updateDepartmentController);

router.delete('/:id', deleteDepartmentController);

module.exports = router;
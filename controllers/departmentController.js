const db = require("../models");

getDepartmentController = (req,res) => {
    db.department.findAll({
        include: [db.employees]
    })
    .then(data => {
        res.status(200).send(data);
    }
    ,err => {
        res.status(400).send(err);
    });
 };

 getDepartmentByIdController = (req,res) => {
    const id = req.params.id;
    
    db.department.findOne({
        where: {
            deptId: id
        }
    })
    .then(data => {
        res.status(200).send(data);
    },
    err => {
        res.status(400).send(err);
    });
 };

createDepartmentController = (req,res) => {
    const {deptName, empId} = req.body;

    if(!deptName || !empId){
        return res.status(400).send({message: "Department Name and Employee ID are required"});
    }

    db.department.create({
        deptName : deptName,
        employeeId: empId
    })
    .then(data => {
        res.status(200).send(data);
    },
    err => {
        res.status(400).send(err);
    });
}

updateDepartmentController = (req,res) => {
    const id = req.params.id;
    const {deptName, empId} = req.body;

    db.department.update({
        deptName : deptName,
        employeeId: empId
    },{
        where: {
            deptId: id
        }
    })
    .then(data => {
        res.status(200).send({message: "Updated successfully"});
    },
    err => {
        res.status(400).send(err);
    });
}

deleteDepartmentController = (req,res) => {
    const id = req.params.id;

    db.department.destroy({
        where: {
            deptId: id
        }
    })
    .then(data => {
        console.log(data);
        res.status(200).send({message: "Deleted successfully"});
    },
    err => {
        res.status(400).send(err);
    });
}

module.exports = {createDepartmentController,
         getDepartmentController,
         getDepartmentByIdController,
         updateDepartmentController,
         deleteDepartmentController};
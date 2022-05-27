const db = require("../models");

getEmployeeController = (req,res) => {
   db.employees.findAll({
       include: [db.department]
   })
   .then(data => {
       res.status(200).send(data);
   }
   ,err => {
       res.status(400).send(err);
   });
};

getEmployeeByIdController = (req,res) => {
    const id = req.params.id;
    
    db.employees.findOne({
        where: {
            id: id
        }
    })
    .then(data => {
        res.status(200).send(data);
    },
    err => {
        res.status(400).send(err);
    });
 };

createEmployeeController = (req,res) => {
    const {name, age} = req.body;

    if(!name || !age){
        return res.status(400).send({message: "Name and age both are required"});
    }

    db.employees.create({
        name: name,
        age: age
    })
    .then(data => {
        res.status(200).send(data);
    },
    err => {
        res.status(400).send(err);
    });
}

updateEmployeeController = (req,res) => {
    const id = req.params.id;
    const {name, age} = req.body;

    db.employees.update({
        name: name,
        age: age
    },{
        where: {
            id: id
        }
    })
    .then(data => {
        res.status(200).send({message: "Updated successfully"});
    },
    err => {
        res.status(400).send(err);
    });
}

deleteEmployeeController = (req,res) => {
    const id = req.params.id;

    db.employees.destroy({
        where: {
            id: id
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

module.exports = {getEmployeeController, 
                getEmployeeByIdController,
                createEmployeeController,
                updateEmployeeController,
                deleteEmployeeController};
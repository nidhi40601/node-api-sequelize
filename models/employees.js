const department = require("./department");

module.exports = (sequelize, DataTypes) => {
    const employees = sequelize.define("employees",{
       id: {
           type: DataTypes.INTEGER,
           autoIncrement: true,
           primaryKey: true
       },
       name: {
           type: DataTypes.STRING,
           allowNull: false
       },
       age: {
           type: DataTypes.INTEGER,
           allowNull: false
       }
    });

    employees.associate = models => {
        employees.hasOne(models.department);
    }

    return employees;

}
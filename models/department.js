const employees = require("./employees");

module.exports = (sequelize, DataTypes) => {
    const department = sequelize.define("department",{
       deptId: {
           type: DataTypes.INTEGER,
           primaryKey: true,
           autoIncrement: true,
           allowNull: false
       },
       deptName: {
           type: DataTypes.STRING,
           allowNull: false
       }
    });

    department.associate = (models) => {
        department.belongsTo(models.employees);
    }

    return department;
}
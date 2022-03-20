'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Department extends Model {
    static associate(models) {
      Department.hasMany(models.City, {
        foreignKey: 'department_id'
      })
    }
  };
  Department.init({
    department_name: { type: DataTypes.STRING, allowNull: false }
  }, {
    sequelize,
    modelName: 'Department',
    tableName: 'departamentos'
  });
  return Department;
};
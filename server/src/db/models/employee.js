'use strict';
const { charges } = require('../../helpers')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    static associate(models) {
      Employee.hasOne(models.Agreement, {
        foreignKey: 'employee_id',
        onDelete: 'CASCADE'
      })
      Employee.hasMany(models.Relative, {
        foreignKey: 'employee_id'
      })
      Employee.belongsTo(models.Person, {
        as: 'Person',
        foreignKey: 'person_id'
      })
    }
  };
  Employee.init({
    person_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    charge: {
      type: DataTypes.ENUM,
      values: charges,
      allowNull: false
    },
    psychosensometric_test:{
      type: DataTypes.DATE
    },
    occupational_test:{
      type: DataTypes.DATE
    },
    license_type: {
      type: DataTypes.STRING
    },
    license_expiration: {
      type: DataTypes.DATE
    },
    hasFines: {
      type: DataTypes.STRING,
      allowNull: false
    },
    file: {
      type: DataTypes.STRING,
    }
  }, {
    sequelize,
    modelName: 'Employee',
    tableName: 'empleados'
  });
  return Employee;
};
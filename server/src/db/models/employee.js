'use strict';
const { charges } = require('../../helpers')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    static associate(models) {
      Employee.hasOne(models.EmployeeAgreement, {
        as: 'Agreement',
        foreignKey: 'employee_id'
      })
      Employee.hasMany(models.Relative, {
        as: 'Relatives',
        foreignKey: 'employee_id'
      })
      Employee.belongsTo(models.Person, {
        as: 'Person',
        foreignKey: 'person_id'
      })
      Employee.belongsToMany(models.ServiceAgreement, {
        through: 'driver_of_service',
        as: 'Services',
        foreignKey: 'driver_id'
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
    psychosensometric_test: {
      type: DataTypes.DATE
    },
    occupational_test: {
      type: DataTypes.DATE
    },
    license_type: {
      type: DataTypes.STRING
    },
    license_expiration: {
      type: DataTypes.DATE
    },
    hasFines: {
      type: DataTypes.STRING
    },
    file: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Employee',
    tableName: 'empleados'
  });
  return Employee;
};
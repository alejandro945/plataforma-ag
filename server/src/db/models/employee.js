'use strict';
import { charges, genres, id_types } from '../../helpers';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    static associate(models) {
      Employee.hasOne(models.agreement,{
        foreignKey:'employee_id',
        onDelete: 'CASCADE'
      })
      Employee.hasMany(models.relative,{
        foreignKey:'employee_id'
      })
      Employee.belongsTo(models.department)
      Employee.belongsTo(models.city)
    }
  };
  Employee.init({
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    telephone1: {
      type: DataTypes.BIGINT
    },
    telephone2: {
      type: DataTypes.BIGINT
    },
    address: {
      type: DataTypes.STRING,
    },
    genre: {
      type: DataTypes.ENUM,
      values: genres,
      allowNull: false
    },
    id_type: {
      type: DataTypes.ENUM,
      values: id_types,
      allowNull: false
    },
    license_type: {
      type: DataTypes.STRING,
    },
    id_number: {
      type: DataTypes.BIGINT,
      allowNull: false,
      validate: {
        isNumeric: true
      }
    },
    charge: {
      type: DataTypes.ENUM,
      values: charges,
      allowNull: false
    },
    department_id:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    city:{

    },
    file: {
      type: DataTypes.STRING,
    },
    state: {
      type: DataTypes.BOOLEAN,
      defaultValue: 1
    }  
  }, {
    sequelize,
    modelName: 'Employee',
    tableName: 'colaboradores'
  });
  return Employee;
};
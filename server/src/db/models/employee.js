'use strict';
const { charges, genres, id_types } = require('../../helpers')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    static associate(models) {
      Employee.hasOne(models.Agreement,{
        foreignKey:'employee_id',
        onDelete: 'CASCADE'
      })
      Employee.hasMany(models.Relative,{
        foreignKey:'employee_id'
      })
      Employee.belongsTo(models.Department,{
        foreignKey: 'department_id'
      })
      Employee.belongsTo(models.City,{
        foreignKey: 'city_id'
      })
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
      allowNull: false,
      foreignKey: true
    },
    city_id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true
    },
    license_expiration:{
      type: DataTypes.DATE,
      allowNull: false
    },
    hasFines:{
      type: DataTypes.STRING,
      allowNull: false
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
    tableName: 'empleados'
  });
  return Employee;
};
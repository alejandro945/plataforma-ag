'use strict';
const { genres, id_types } = require('../../helpers')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Person extends Model {
    static associate(models) {
      Person.belongsTo(models.Department,{
        foreignKey: 'department_id'
      })
      Person.belongsTo(models.City,{
        foreignKey: 'city_id'
      })
    }
  };
  Person.init({
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
    id_number: {
      type: DataTypes.BIGINT,
      allowNull: false,
      validate: {
        isNumeric: true
      }
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
    birth:{
      type: DataTypes.DATE,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      defaultValue: 'ACTIVO'
    }
  }, {
    sequelize,
    modelName: 'Person',
    tableName: 'individuos'
  });
  return Person;
};
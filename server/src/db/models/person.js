'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Person extends Model {
    static associate(models) {
      Person.hasOne(models.Employee,{
        as:'Employee',
        foreignKey:'person_id'
      })
      Person.hasOne(models.Owner,{
        as:'Owner',
        foreignKey:'person_id'
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
  }, {
    sequelize,
    modelName: 'Person',
    tableName:'personas'
  });
  return Person;
};
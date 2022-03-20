'use strict';
const { id_types,occupation_types } = require('../../helpers')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Relative extends Model {
    static associate(models) {
      Relative.belongsTo(models.Employee, {
        as: 'Employee',
        foreignKey: 'employee_id'
      })
    }
  };
  Relative.init({
    employee_id: DataTypes.INTEGER,
    relationship: DataTypes.STRING,
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    occupation: { type: DataTypes.ENUM, values: occupation_types },
    birth: DataTypes.DATE,
    id_type: { type: DataTypes.ENUM, values: id_types },
    id_number: DataTypes.BIGINT,
    telephone: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'Relative',
    tableName: 'familiares'
  });
  return Relative;
};
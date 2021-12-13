'use strict';
import { id_types,occupation_types } from '../../helpers';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Relative extends Model {
    static associate(models) {
      Relative.belongsTo(models.employee, {
        as: 'Employee',
        foreignKey: 'id_employee'
      })
    }
  };
  Relative.init({
    id_employee: DataTypes.INTEGER,
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
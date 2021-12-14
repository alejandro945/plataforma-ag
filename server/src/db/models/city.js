'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    static associate(models) {
      City.belongsTo(models.Department,{
        as: 'Department',
        foreignKey: 'department_id'
      })
    }
  };
  City.init({
    department_id: { type: DataTypes.INTEGER },
    city_name: { type: DataTypes.STRING, allowNull: false }
  }, {
    sequelize,
    modelName: 'City',
    tableName: 'ciudades'
  });
  return City;
};
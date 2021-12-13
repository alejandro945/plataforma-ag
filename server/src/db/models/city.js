'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    static associate(models) {
      City.belongsTo(models.department)
    }
  };
  City.init({
    id_department: DataTypes.INTEGER,
    city_name: { type: DataTypes.STRING, allowNull: false }
  }, {
    sequelize,
    modelName: 'City',
    tableName: 'ciudades'
  });
  return City;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vehicle extends Model {
    static associate(models) {
      Vehicle.belongsTo(models.Owner, {
        as: 'Owner',
        foreignKey: 'owner_id'
      })
    }
  };
  Vehicle.init({
    owner_id: { type: DataTypes.INTEGER, allowNull: false },
    intern: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      defaultValue: 'ACTIVO'
    },
    plate: { type: DataTypes.STRING, allowNull: false },
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Vehicle',
    tableName:'vehiculos'
  });
  return Vehicle;
};
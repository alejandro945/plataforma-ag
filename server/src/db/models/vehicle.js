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
      Vehicle.hasOne(models.Document, {
        as: 'Documents',
        foreignKey: 'vehicle_id'
      })
    }
  };
  Vehicle.init({
    owner_id: { type: DataTypes.INTEGER, allowNull: false },
    intern: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    plate: { type: DataTypes.STRING(24), allowNull: false },
    model: { type: DataTypes.INTEGER, allowNull: false },
    brand: { type: DataTypes.STRING, allowNull: false },
    class: { type: DataTypes.STRING, allowNull: false },
    capacity: { type: DataTypes.INTEGER, allowNull: false },
    chassis: { type: DataTypes.STRING, allowNull: false },
    engine: { type: DataTypes.STRING, allowNull: false },
    cylinder: { type: DataTypes.INTEGER, allowNull: false },
    state: {
      type: DataTypes.STRING,
      defaultValue: 'ACTIVO'
    },
  }, {
    sequelize,
    modelName: 'Vehicle',
    tableName: 'vehiculos'
  });
  return Vehicle;
};
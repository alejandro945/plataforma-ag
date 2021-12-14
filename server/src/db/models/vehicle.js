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
    owner_id: { type: DataTypes.INTEGER, allowNull: false},
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
  sequelize,
  modelName: 'Vehicle',
});
return Vehicle;
};
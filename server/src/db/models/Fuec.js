'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fuec extends Model {
    static associate(models) {
      Fuec.belongsTo(models.Client, {
        as: 'Client',
        foreignKey: 'client_id'
      })
      Fuec.belongsTo(models.Person, {
        as: 'Maker',
        foreignKey: 'maker_id'
      })
      Fuec.belongsTo(models.Vehicle, {
        as: 'Vehicle',
        foreignKey: 'vehicle_id'
      })
      Fuec.hasMany(models.Employee, {
        as: 'Driver'
      })
    }
  };
  Fuec.init({
    contract_object: {
      type: DataTypes.STRING,
      allowNull: false
    },
    client_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    origin: {
      type: DataTypes.STRING,
      allowNull: false
    },
    destination: {
      type: DataTypes.STRING,
      allowNull: false
    },
    initial_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    expiration_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    vehicle_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    amount_passengers: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    trip_value: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    fuec_value: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    maker_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Fuec',
    tableName: 'fuecs',
  });
  return Fuec;
};
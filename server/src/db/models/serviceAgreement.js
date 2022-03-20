'use strict';
const {contract_frequencies}= require('../../helpers')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ServiceAgreement extends Model {
    static associate(models) {
      ServiceAgreement.belongsTo(models.Client, {
        as: 'Client',
        foreignKey: 'client_id'
      })
      ServiceAgreement.belongsTo(models.User, {
        as: 'Maker',
        foreignKey: 'maker_id'
      })
      ServiceAgreement.belongsTo(models.Vehicle, {
        as: 'Vehicle',
        foreignKey: 'vehicle_id'
      })
      ServiceAgreement.belongsToMany(models.Employee, {
        through: 'driver_of_service',
        as: 'Drivers',
        foreignKey:'service_id'
      })
    }
  };
  ServiceAgreement.init({
    contract_object: {
      type: DataTypes.STRING,
      allowNull: false
    },
    contract_frequency: {
      type: DataTypes.ENUM,
      values: contract_frequencies,
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
    modelName: 'ServiceAgreement',
    tableName: 'contratos_de_servicios',
  });
  return ServiceAgreement;
};
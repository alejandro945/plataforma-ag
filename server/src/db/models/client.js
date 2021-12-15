'use strict';
const { id_types, costumer_types, contract_frequencies } = require('../../helpers')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    static associate(models) {
      Client.hasMany(models.Fuec, {
        as: 'Client',
        foreignKey: 'client_id'
      })
    }
  };
  Client.init({
    contractor: {
      type: DataTypes.STRING,
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
    email: {
      type: DataTypes.STRING,
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
    liable: {
      type: DataTypes.STRING,
      set(value) {
        if (!value) {
          this.setDataValue('liable', this.getDataValue('contractor'));
        }
      }
    },
    liable_id_number: {
      type: DataTypes.BIGINT,
      set(value) {
        if (!value) {
          this.setDataValue('liable_id_number', this.getDataValue('id_number'));
        }
      }
    },
    client_type: {
      type: DataTypes.ENUM,
      values: costumer_types,
      allowNull: false
    },
    contract_frequency: {
      type: DataTypes.ENUM,
      values: contract_frequencies,
      allowNull: false
    },
    file: {
      type: DataTypes.STRING,
    }
  }, {
    sequelize,
    modelName: 'Client',
    tableName: 'clientes'
  });
  return Client;
};
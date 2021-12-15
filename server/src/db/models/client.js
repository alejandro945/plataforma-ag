'use strict';
const { id_types, costumer_types } = require('../../helpers')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    static associate(models) {
      Client.hasMany(models.ServiceAgreement, {
        as: 'Agreements',
        foreignKey: 'client_id'
      })
    }
  };
  Client.init({
    client_type: {
      type: DataTypes.ENUM,
      values: costumer_types,
      allowNull: false
    },
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
      type: DataTypes.BIGINT,
      allowNull: false
    },
    telephone2: {
      type: DataTypes.BIGINT
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
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
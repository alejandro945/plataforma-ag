'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Document extends Model {
    static associate(models) {
      Document.belongsTo(models.Vehicle, {
        as: 'Vehicle',
        foreignKey: 'vehicle_id'
      })
    }
  };
  Document.init({
    vehicle_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    soat_number: { type: DataTypes.STRING, allowNull: false },
    soat_expiration: { type: DataTypes.DATE, allowNull: false },
    technomechanic_number: { type: DataTypes.STRING, allowNull: false },
    technomechanic_expiration: { type: DataTypes.DATE, allowNull: false },
    operation_number: { type: DataTypes.STRING, allowNull: false },
    operation_expiration: { type: DataTypes.DATE, allowNull: false },
    rce: { type: DataTypes.STRING, allowNull: false },
    rcc: { type: DataTypes.STRING, allowNull: false },
    policy_expiration: { type: DataTypes.DATE, allowNull: false },
    extinguisher_expiration: { type: DataTypes.DATE, allowNull: false },
  }, {
    sequelize,
    modelName: 'Document',
    tableName: 'documentos_de_vehiculos'
  });
  return Document;
};
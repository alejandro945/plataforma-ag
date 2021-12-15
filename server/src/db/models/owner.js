'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Owner extends Model {
    static associate(models) {
      Owner.hasMany(models.Vehicle, {
        as: 'Vehicles',
        foreignKey: 'owner_id'
      })
      Owner.belongsTo(models.Person, {
        as: 'Person',
        foreignKey: 'person_id'
      })
    }
  };
  Owner.init({
    person_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    debt:{
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    file: {
      type: DataTypes.STRING,
    }
  }, {
    sequelize,
    modelName: 'Owner',
    tableName: 'propietarios'
  });
  return Owner;
};
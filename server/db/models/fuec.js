'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class fuec extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  fuec.init({
    origen: DataTypes.STRING,
    destino: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'fuec',
  });
  return fuec;
};
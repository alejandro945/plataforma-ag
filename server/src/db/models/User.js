'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcryptjs')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    usuario: { type: DataTypes.STRING, allowNull: false },
    contraseña: {
      type: DataTypes.STRING,
      set(value) {
        // Hashing the value with an appropriate cryptographic hash function is better.
        this.setDataValue('contraseña', bcrypt.hashSync(value, 12));
      }
    },
    role: DataTypes.STRING,
    nombres: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    estado: { type: DataTypes.BOOLEAN, defaultValue: 1 }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'usuarios'
  });
  return User;
};
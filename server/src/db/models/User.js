'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcryptjs');
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
      allowNull: false,
      set(value) {
        // Hashing the value with an appropriate cryptographic hash function is better.
        this.setDataValue('contraseña', bcrypt.hashSync(value, 12));
      }
    },
    role: { type: DataTypes.STRING, allowNull: false },
    nombres: { type: DataTypes.STRING, allowNull: false },
    apellidos: { type: DataTypes.STRING, allowNull: false },
    estado: { type: DataTypes.BOOLEAN, defaultValue: 1 }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'usuarios',
    timestamps: true
  });
  return User;
};
'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcryptjs');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.belongsTo(models.Person, {
        as: 'Person',
        foreignKey: 'person_id'
      })
    }
  };
  User.init({
    person_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      set(value) {
        // Hashing the value with an appropriate cryptographic hash function is better.
        this.setDataValue('contraseña', bcrypt.hashSync(value, 12));
      }
    },
    role: { type: DataTypes.STRING, allowNull: false },
    state: { type: DataTypes.BOOLEAN, defaultValue: 1 }
  }, {
    scopes: {
      raw: {
        attributes: {
          exclude: ['contraseña']
        }
      },
      contrast(value) {
        return {
          where: { username: value },
          defaults: value
        }
      }
    },
    sequelize,
    modelName: 'User',
    tableName: 'usuarios'
  });
  return User;
};
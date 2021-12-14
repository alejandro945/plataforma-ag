'use strict';
const { agreement_types } = require('../../helpers')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Agreement extends Model {
    static associate(models) {
      Agreement.belongsTo(models.Employee,{
        foreignKey: 'employee_id'
      })
    }
  };
  Agreement.init({
    employee_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    type: {
      type: DataTypes.ENUM,
      values: agreement_types
    },
    initial_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    finish_date: {
      type: DataTypes.DATE
    },
    eps: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pension_fund: {
      type: DataTypes.STRING,
      allowNull: false
    },
    severance_fund: {
      type: DataTypes.STRING,
      allowNull: false
    },
    salary: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Agreement',
    tableName: 'contratos'
  });
  return Agreement;
};
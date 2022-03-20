'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('contratos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      employee_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Employee',
          key: 'id'
        }
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false
      },
      initial_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      finish_date: {
        type: Sequelize.DATE
      },
      eps: {
        type: Sequelize.STRING,
        allowNull:false
      },
      pension_fund: {
        type: Sequelize.STRING,
        allowNull:false
      },
      severance_fund: {
        type: Sequelize.STRING,
        allowNull:false
      },
      salary:{
        type: Sequelize.BIGINT,
        allowNull: false
      },
      createdAt: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      },
      updatedAt: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('contratos');
  }
};

'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('familiares', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_employee: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Employee',
          key: 'id'
        }
      },
      relationship: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      occupation: {
        type: Sequelize.STRING
      },
      birth: {
        type: Sequelize.DATE
      },
      id_type: {
        type: Sequelize.STRING
      },
      id_number: {
        type: Sequelize.BIGINT
      },
      telephone: {
        type: Sequelize.BIGINT
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
    await queryInterface.dropTable('familiares');
  }
};
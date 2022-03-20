'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('empleados', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      telephone1: {
        type: Sequelize.BIGINT
      },
      telephone2: {
        type: Sequelize.BIGINT
      },
      address: {
        type: Sequelize.STRING,
      },
      genre: {
        type: Sequelize.STRING,
        allowNull: false
      },
      id_type: {
        type: Sequelize.STRING,
        allowNull: false
      },
      license_type: {
        type: Sequelize.STRING,
      },
      id_number: {
        type: Sequelize.BIGINT,
        allowNull: false
      },
      charge: {
        type: Sequelize.STRING,
        allowNull: false
      },
      department_id: {
        type: Sequelize.UUID,
        references: {
          model: 'departamentos',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade',
        allowNull: false
      },
      city_id: {
        type: Sequelize.UUID,
        references: {
          model: {
            tableName: 'ciudades1',
            schema: 'schema'
          },
          key: 'id'
        }
      },
      hasFines: {
        type: Sequelize.STRING,
        allowNull: false
      },
      license_expiration: {
        type: Sequelize.DATE,
        allowNull: false
      },
      file: {
        type: Sequelize.STRING,
      },
      state: {
        type: Sequelize.BOOLEAN,
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
    await queryInterface.dropTable('empleados');
  }
};
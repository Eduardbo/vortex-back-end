'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Produtos', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUID
      },
      peca: {
        type: Sequelize.STRING
      },
      marca: {
        type: Sequelize.STRING
      },
      tipo: {
        type: Sequelize.STRING
      },
      tamanho: {
        type: Sequelize.STRING
      },
      preco: {
        type: Sequelize.FLOAT
      },
      quantidade: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Produtos');
  }
};
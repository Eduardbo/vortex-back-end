'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Usuarios_roles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      usuario_id: {
        type: Sequelize.UUID,             
        references:{                      //Referencia para receber o ID da tabela Usuario
          model: 'Usuarios',
          key: 'id',
        },                                //Com essa funções declaradas, sempre que realizarmos um update ou um delete
        onDelete: 'CASCADE',              //as tabelas serão deletadas também, no efeito cascada
        onUpdate: 'CASCADE'
      
      },
      role_id: {
        type: Sequelize.UUID,
        references:{
          model: 'Roles',
          key:'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',

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
    await queryInterface.dropTable('Usuarios_roles');
  }
};
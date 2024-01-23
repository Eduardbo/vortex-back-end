'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    
      Usuarios.belongsToMany(models.Roles, {
        through: models.Usuarios_roles,
        as: 'usuario_roles',
        foreignKey: 'usuario_id'
      }),

      Usuarios.belongsToMany(models.Permissoes, {
        through: models.Usuarios_permissoes,
        as: 'usuario_permissoes',
        foreignKey: 'usuario_id'
      })
    
    }
  }
  Usuarios.init({
    nome: {
      type: DataTypes.STRING,
      validade: {
        funcValidadora: function(dado){
          if(dado.length < 3 ) throw new Error('O nome deve conter pelo menos três caractere')
        }
      } 
    },
    email: {
      type: DataTypes.STRING,
        validate: {
          isEmail: {
            args: true,
            msg: 'Dados do tipo e-mail inválidado'
          }
        }
    },
    senha: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Usuarios',
    defaultScope: {
      attributes:{
        exclude: ['senha']
      }
    }
  });
  return Usuarios;
};
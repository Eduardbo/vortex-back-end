'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Roles_permissoes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Roles_permissoes.init({
    role_id: DataTypes.UUID,
    permissao_id: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'Roles_permissoes',
  });
  return Roles_permissoes;
};
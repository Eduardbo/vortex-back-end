'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuarios_roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Usuarios_roles.init({
    usuario_id: DataTypes.UUID,
    role_id: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'Usuarios_roles',
  });
  return Usuarios_roles;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produtos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Produtos.init({
    peca: DataTypes.STRING,
    marca: DataTypes.STRING,
    tipo: DataTypes.STRING,
    tamanho: DataTypes.STRING,
    preco: DataTypes.FLOAT,
    quantidade: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Produtos',
  });
  return Produtos;
};
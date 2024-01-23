const Service = require('./Service');
const database = require('../models');
const uuid = require('uuid');

class produtoService extends Service{
    
    constructor(){
        super('Produtos')
    }

    async adicionarProduto(novo){

        //verificar se o produto já está cadastrado
        const produtoRepetido = await database[this.model].findOne({
            where: { peca: novo.peca }
        });
        //Informar que o produto está repetido
        if(!produtoRepetido){
            console.log('Produto já existende no sistema');
        };
        //Adição do produto no Banco de dados
        const inserirProduto = await database[this.model].create(
            {
                id: uuid.v4(),
                peca: novo.peca,
                marca: novo.marca,
                tipo: novo.tipo,
                tamanho: novo.tamanho,
                preco: novo.preco,
                quantidade: novo.quantidade
            }
        );

        return inserirProduto;
    }

    //Busca por Peca
    async buscaPeca(pecaParams){

        const busca = await database[this.model].findAll({
            where: { peca: pecaParams.peca }
        })
        return busca;
    }

    async buscaAvancada(parametro){
        let whereClause = {};

        if(parametro.peca){
            whereClause.peca = parametro.peca;
        }
        if(parametro.marca){
            whereClause.marca = parametro.marca;
        }
        if(parametro.tipo){
            whereClause.tipo = parametro.tipo;
        }
        if(parametro.tamanho){
            whereClause.tamanho = parametro.tamanho;
        }
        if(parametro.preco){
            whereClause.preco = parametro.preco
        }

        const buscaRefinada = await database[this.model].findAll({
            where: whereClause 
        });

        return buscaRefinada;

    }

}

module.exports = produtoService;
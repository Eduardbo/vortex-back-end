const Service = require('./Service');
const database = require('../models');
const uuid = require('uuid');

class permissoesService extends Service{
  
    constructor(){
        super('Permissoes')
    }

    //Métodos especificos

    async criarcaoPermissao(novo){

        const buscaNome = await database[this.model].findOne({
            where: { nome: novo.nome }
        })

        if(buscaNome){
            throw new Error('Permissão já criada com esse nome')
        }

        try{
            const permissaoNova = await database[this.model].create({
                id: uuid.v4(),
                nome: novo.nome,
                descricao: novo.descricao
            })            

            return permissaoNova;

        } catch(error){
            throw new Error('Erro ao cadastrar a Permissão')
        }


    }
    

}

module.exports = permissoesService;
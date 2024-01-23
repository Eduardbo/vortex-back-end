const database = require('../models');
const Service = require('./Service')
const uuid = require('uuid')

class RoleService extends Service{
 
    constructor(){
        super('Roles')
    }

      //MÉTODOS ESPECÍFICOS

    async cadastro(infoCadastro){                       //cadastro de Role
       
        const buscaNoBanco =  await database[this.model].findOne({      //busca nome no banco de dados e armazenar em uma variavel boolean
        where:{ nome: infoCadastro.nome }
       })

       if(buscaNoBanco){                                    //Fazer a verificação de que o nome ja existe
        throw new Error('Role já cadastrada')
       }

       try {                                                //Fazer o cadastro
            const novaRole = await database[this.model].create({
                id: uuid.v4(),
                nome: infoCadastro.nome,
                descricao: infoCadastro.descricao
            })

            return novaRole;

       } catch(error){
        throw new Error('Erro ao cadastrar Role')
       }

    }
}

module.exports = RoleService;
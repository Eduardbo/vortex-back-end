const Service = require('./Service');
const database = require('../models');
const bcrypt = require('bcryptjs');
const uuid = require('uuid');

class usuarioService extends Service{
    constructor(){
        super('Usuarios')
    }       

    //MÉTODOS ESPECÍFICOS

    async criarNovoUsuario(novo){                  //Criação de usuarios 
        
        const usuarioRepetido = await database[this.model].findOne(   //checar se o email já esta sendo usado
            { where: { email: novo.email}  }
        )

        if(usuarioRepetido){                                          //Fazer a validação se pode ser usado o email;
            console.log('Usuario já cadastrado com esse email')
        }

        const senhaHash = await bcrypt.hash(novo.senha, 8);         //Usando a API a senha é emcripitada e armazenada no banco de dados;

        const inserirUsuario = await database[this.model].create(   //Inserir os dados recebidos em cada coluna das tabelas no bando de dados
            {
                id: uuid.v4(),
                nome: novo.nome,
                email: novo.email,
                senha: senhaHash
            }

        )

        return inserirUsuario;

    }


}

module.exports = usuarioService;
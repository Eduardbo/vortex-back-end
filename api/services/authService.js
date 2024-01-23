const database = require('../models');
const { compare } = require('bcryptjs');
const { sing, sign } = require('jsonwebtoken');
const jsonSecret = require('../config/jsonSecret');

class AuthService{

    async login(infoLogin){
        const usuario = await database.Usuarios.findOne({                  // Constante que busca e armazena as informações do bando de dados para fazer comparações futuras
                attributes: ['id', 'email', 'senha'], 
                where: {
                    email: infoLogin.email,
                }
            })

        if(!usuario){                                                     //Condição para informar que o usuario nao está cadastrado
            throw new Error('Usuario não cadastrado')
        }

        const senhaIguais = await compare(infoLogin.senha, usuario.senha);      //Variavel armazena um valor bollean se a senha informada é igual ao do banco de dados

        if (!senhaIguais){                                                //Condição que informa ao usuario que alguma informação inserida está errada
            throw new Error('Usuario ou senha invalido')
        }

        const accessToken = sign({
            id: usuario.id,
            email: usuario.email
        }, jsonSecret.secret, {
            expiresIn: 86400
        }) 

        return { accessToken } 
    }
}

module.exports = AuthService
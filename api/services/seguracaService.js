const database = require('../models');
const Service = require('./Service');
const Sequelize = require('sequelize')

class SeguracaService extends Service{

    constructor(){
        super('Usuarios')
    }

    //MÉTODOS ESPECÍFICO

    async cadastrarAcl(dto){

        console.log({
            "usuarioId":dto.usuarioId,
            "roles": dto.roles,
            "permissoes": dto.permissoes
        })

        const usuario = await database[this.model].findOne({
            include: [
                {
                    model: database.Roles,
                    as: 'usuario_roles',
                    attributes: ['id', 'nome', 'descricao'],
                    through: {
                        attributes: [],
                    }
                },
                {
                    model: database.Permissoes,
                    as:'usuario_permissoes',
                    attributes: ['id', 'nome', 'descricao'],
                    through: {
                        attributes: [],
                    }
                }
            ],
            where: {
                id: dto.usuarioId
            }
        })

        if(!usuario){
            throw new Error('Usuario não cadastrado')
        }

        const rolesCadastradas = await database.Roles.findAll({
            where:{
                id: {
                    [Sequelize.Op.in]: dto.roles
                }
            }
        })

        const permissoesCadastradas = await database.Permissoes.findAll({
            where:{
                id:{
                    [Sequelize.Op.in]: dto.permissoes
                }
            }
        })

        // Remover associações existentes 
         await usuario.removeUsuario_roles(usuario.usuario_roles);
         await usuario.removeUsuario_permissoes(usuario.usuario_permissoes);
        // A dicionar associações criadas
         await usuario.addUsuario_roles(rolesCadastradas);
         await usuario.addUsuario_permissoes(permissoesCadastradas);


        const novoUsuario = await database[this.model].findOne({
            include:[
                {
                    model: database.Roles,
                    as:'usuario_roles',
                    attributes:['id', 'nome', 'descricao'],
                    through: {
                        attributes: [],
                    }
                },
                {
                    model: database.Permissoes,
                    as: 'usuario_permissoes',
                    attributes:['id', 'nome', 'descricao'],
                    through: {
                        attributes: [],
                    }
                }
            ]
        })

        return novoUsuario;
    }

    async cadastrarPermissoesRoles(dto){

        const role = await database.Roles.findOne({
            include: [
                {
                    model: database.Permissoes,
                    as: 'roles_das_permissoes',
                    attributes: [ 'id', 'nome', 'descricao'],
                    through: {
                        attributes: [],
                    }
                }
            ],
            where:{
                id: dto.roleId
            }
        })

        if(!role){
            throw new Error('Role não cadastrada')
        }

        const permissoesCadastradas = await database.Permissoes.findAll({
            where:{
                id: {
                    [Sequelize.Op.in]: dto.permissoes
                }
            }
        })

        await role.removeRoles_das_permissoes(role.roles_das_permissoes);
        await role.addRoles_das_permissoes(permissoesCadastradas);

        const novaRole = await  database.Roles.findOne({
            include: [
                {
                    model: database.Permissoes,
                    as: 'roles_das_permissoes',
                    attributes: [ 'id', 'nome', 'descricao'],
                    through: {
                        attributes: [],
                    }
                }
            ],
            where:{
                id: dto.roleId
            }
        })

        return novaRole;
    }

}

module.exports = SeguracaService;
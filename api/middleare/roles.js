const database = require('../models')

const roles = (listasRoles) => {
    
    return async (req, res, next) => {
    
        const { usuarioId } = req;


        //Busca de usuario
        const usuario = await database.Usuarios.findOne({
            
            include: [
                {
                    model: database.Roles,
                    as: 'usuario_roles',
                    attributes: ['id', 'nome']
                }
            ],
            where: {
                id: usuarioId
            }
        })


        if(!usuario){
            return res.status(401).json('Usuario não cadastrado');
        }

        const rolesCadastradas = await usuario.usuario_roles
            .map( (role) => role.nome )
            .some( (role) => listasRoles.includes(role))

        if(!rolesCadastradas){
            return res.status(401).json(`Usario não possui acesso a essa rota`);

        }

        return next();
    }
}

module.exports = roles
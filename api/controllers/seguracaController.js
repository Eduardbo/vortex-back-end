const {SeguracaService} = require('../services');
const seguracaService = new SeguracaService();

class SeguracaController{

    static async cadastrarAcl(req, res){
        
        const {roles, permissoes} = req.body;
        const { usuarioId } = req;

        try {
            const cadastro = await seguracaService.cadastrarAcl({roles, permissoes, usuarioId});
            res.status(201).json(cadastro)
        } catch (error) {
            res.status(400).json(error.message)
        }

    }

    static async cadastrarPermissoesRoles(req, res){

        const{roleId, permissoes} = req.body

        try {
            const permissoesRole = await seguracaService.cadastrarPermissoesRoles({roleId, permissoes});
            return res.status(201).json(permissoesRole);
        } catch (error) {
            res.status(400).json(error.message);
        }

    }

}

module.exports = SeguracaController;
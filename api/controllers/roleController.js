const {RoleService} = require('../services');
const roleService = new RoleService();

class RoleController{

    static async cadastro(req,res){             //Cadastro de Role

        const cadastro = req.body;

        try{
            const role = await roleService.cadastro(cadastro);
            res.status(201).json(role);
        } catch(error){
            res.status(500).json(error.message)
        }
    }

    static async busca(req, res){               //Busca Geral
        try{
            const buscaGeral = await roleService.buscaGeral();
            res.status(200).json(buscaGeral);
        } catch(error){
            res.status(500).json(error.message)
        }
    }

    static async buscaiD(req,res){              //Busca por ID

        const { id } = req.params;

        try{
            const buscaPorId = await roleService.buscaPorId(id);
            res.status(200).json(buscaPorId);
        } catch(error){ 
            res.status(500).json(error.message)
        }
    }

    static async atualizacaoRole(req, res){        //Atualizacao de Role
   
        const dadosAtualizados = req.body;
        const { id } = req.params;
       
        try{
            await roleService.atualizacao(dadosAtualizados, id);
            res.status(200).send('Dados atualizados com Sucesso!')
        } catch(error){
            res.status(200).json(error.message)
        }

    }

    static async deletarRole(req, res){            //deletar
        const { id } = req.params;

        try{
            await roleService.deleteGeral(id);
            res.status(200).send('Deletado com sucesso!')
        } catch(error){
            res.status(200).json(error.message)
        }

    }

}



module.exports = RoleController;
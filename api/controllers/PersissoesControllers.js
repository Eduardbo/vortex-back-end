const { PermissoesService } = require('../services')
const permissoesService = new PermissoesService();

class PermissoesControllers{
    
    static async busca(req,res){                        //busca geral
        try{
            const buscaTotal = await permissoesService.buscaGeral();
            res.status(200).json(buscaTotal);

        } catch(error){
            res.status(500).json(error.message0)
        }
        } 

    static async buscaId(req, res){                     //Busca por id
        const {id} = req.params;

        try{
            const buscaPorId = await permissoesService.buscaPorId(id);
            res.status(200).json(buscaPorId);
        } catch(error){
            res.status(200).json(error.message)
        }
    }

    static async criacaoDePermissao(req,res){          //criar permisao
        
        const novaPermissao = req.body;

        try{
            await permissoesService.criarcaoPermissao(novaPermissao);
            res.status(200).json('Permissao criada com Sucesso!')
        } catch(error){
            res.status(500).json(error.message)
        }
    }

    static async atualizarPermissoes(req, res){
        const novoDado = req.body;
        const {id} = req.params;

        try{
        await permissoesService.atualizacao(novoDado, id);
        res.status(200).json('Dados atualizados')
        } catch(error){
            res.status(500).json(error.message)
        }
    }

    static async deletaPermissoes(req, res){
        const {id} = req.params;

        try{
            await permissoesService.deleteGeral(id);
            res.status(200).json('Deletado com sucesso')
        } catch(error){
            res.status(500).json(error.message)
        }
    }

}

module.exports = PermissoesControllers;
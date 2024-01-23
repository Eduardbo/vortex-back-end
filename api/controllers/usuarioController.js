const {UsuarioService} = require('../services');
const usuarioService = new UsuarioService();

class usuarioController{

    static async exibirUsuario(req, res){                   //Buscar todos os usuario

        try {
            const resultado = await usuarioService.buscaGeral();
            return res.status(200).json(resultado);
        } catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async buscarPorId(req, res){                     //Buscar por Id

        const { id } = req.params;

        try{
            const buscaDoid = await usuarioService.buscaPorId(id)
            return res.status(200).json(buscaDoid)
        } catch(error){
            res.status(500).json(error.message)
        }

    }    

    static async criarUsuario(req, res){                //Inserir Usuarios no Banco de Dandos

        const novoUsuario = req.body;
        try{
             const usuarioCadastro = await usuarioService.criarNovoUsuario(novoUsuario)
             return res.status(200).json(usuarioCadastro);

        } catch(error){
            return res.status(500).json(error.message)
        }

    }

    static async atualizacaoDeUsuario(req, res){        //Atualização de usuario 

            const dadoAtualizado = req.body;
            const { id } = req.params;

        try{
            const update = await usuarioService.atualizacao(dadoAtualizado, id)
            res.status(200).send('Dados atualizados com sucesso!')
        } catch(error){
            res.status(500).json(error.message)
        }
    }

    static async deletarUsuario(req, res){              //Deletar usuario
        
        const { id } = req.params;

        try{
            await usuarioService.deleteGeral(id)
            res.status(200).json('Usuarios deletado com Sucesso!')
        }catch(error){
            res.status(500).json(error.message)
        }
    }

}
module.exports = usuarioController;

const { ProdutoService } = require('../services');
const produtoService = new ProdutoService();

class ProdutosController{

    //Busca de todos os Produtos
    static async buscaProdutos(req,res){
        try{
            const produto = await produtoService.buscaGeral();
            res.status(200).json(produto);
        }catch(error){
            res.status(500).json(error.message);
        }
    }

    //Busca por peças
    static async buscaProdutosPeca(req,res){
        const pecaBuscada = req.body;
        try{
            const produto = await produtoService.buscaPeca(pecaBuscada);
            res.status(200).json(produto);
        }catch(error){
            res.status(500).json(error.message);
        }
    }
    //Busca por peça/tamanho
    static async buscaRefianda(req,res){
        const parametros = req.body;
        try{
            const produto = await produtoService.buscaAvancada(parametros);
            res.status(200).json(produto);
        }catch(error){
            res.status(500).json(error.message)
        }
    }  

    //Adicição de Produtos
    static async adicaoProduto(req, res){
        const produtoReq = req.body;

        try{
            const produtoAdicionado = await produtoService.adicionarProduto(produtoReq);
            res.status(200).json(produtoAdicionado);
        } catch(error){
            res.status(500).json(error.message)
        }
    }


    //Atualização de produtos
    static async atualizacaoProdutos(req,res){
        const {id} = req.params;
        const dadoAtualizado = req.body;

        try{
            await produtoService.atualizacao(dadoAtualizado,id);
            res.status(200).json('Produto Atualizado');
        } catch(error){
            res.status(500).json(error.message)
        }
    }

    //Deletar produto
    static async deletarProduto(req,res){
        const {id} = req.params;

        try{
            await produtoService.deleteGeral(id);
            res.status(200).json('Produto deletado com Sucesso!')
        } catch(erro){
            res.status(500).json(error.message)
        }

    }

}

module.exports = ProdutosController;
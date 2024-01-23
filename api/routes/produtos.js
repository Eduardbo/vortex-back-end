const {Router} = require('express');
const produtosController = require('../controllers/produtosController');

const roles = require('../middleare/roles');                //Escolho a role que tem acesso a rota
const permissoes = require('../middleare/permissoes');      //Escolho apenas a permissao e quem tem essa permissao tem acesso

const router = Router();

router  
    //Busca de todos os Produtos
    .get('/produtos',permissoes(["Pesquisa"]), produtosController.buscaProdutos)
    //Busca Avançada
    .get('/produtos/busca-avancada',roles(["Vendedor","Atleta","Gerente-geral"]), produtosController.buscaRefianda)
    
    //Criação de Produto
    .post('/produto-criar',roles(["Gerente-geral"]), produtosController.adicaoProduto)
    
    //Atualização de Produto
    .put('/produto-atualizacao/:id',roles(["Gerente-geral"]), produtosController.atualizacaoProdutos)
    
    //Deletar Produto
    .delete('/produto-deletar/:id',roles(["Gerente-geral"]), produtosController.deletarProduto)

module.exports = router;
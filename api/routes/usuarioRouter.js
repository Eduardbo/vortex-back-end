const { Router } = require('express');
const usuarioController = require('../controllers/usuarioController');
const autenticado = require('../middleare/autenticado');
const roles = require('../middleare/roles');

const router = Router();

router.use(autenticado);

router
    .get('/usuario',roles(["Vendedor","Gerente-geral"]), usuarioController.exibirUsuario)                          //Busca de todos os usuarios
    .get('/usuario/:id', roles(["Vendedor","Gerente-geral"]), usuarioController.buscarPorId)                        //Busca por id
    .post('/criar-usuario', roles(["Vendedor","Gerente-geral"]) ,usuarioController.criarUsuario)                    //Criação de usuario
    .put('/atualizacao-usuario/:id',roles(["Vendedor","Gerente-geral"]), usuarioController.atualizacaoDeUsuario)   //Atualição de usuario
    .delete('/deletar-usuario/:id', roles(["Gerente-geral"]), usuarioController.deletarUsuario)          //Deletar um usuario


module.exports = router;
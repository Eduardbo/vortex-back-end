const {Router} = require('express');
const permissoesController = require('../controllers/PersissoesControllers');
const roles = require("../middleare/roles");

const router = Router();

router
    .get('/permissoes', permissoesController.busca)
    .get('/permissoes-id/:id', permissoesController.buscaId)
    .post('/permissoes-criar', roles(["Gerente-geral"]), permissoesController.criacaoDePermissao)
    .put('/permissoes-atualizar/:id', permissoesController.atualizarPermissoes)
    .delete('/permissoes-delete/:id', permissoesController.deletaPermissoes)

module.exports = router;
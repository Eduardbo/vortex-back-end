const { Router } = require('express');
const roleController = require('../controllers/roleController');

const router = Router();

router
    .post('/role', roleController.cadastro)
    .get('/role', roleController.busca)
    .get('/role/:id', roleController.buscaiD)
    .delete('/role-delete/:id', roleController.deletarRole)
    .put('/role-atualizacao/:id',roleController.atualizacaoRole)

module.exports = router;
const {Router} = require('express');
const router = Router();

const SeguracaController = require('../controllers/seguracaController');

router
    .post('/seguraca/acl', SeguracaController.cadastrarAcl)
    .post('/seguraca/permissoes-roles', SeguracaController.cadastrarPermissoesRoles)

module.exports = router;
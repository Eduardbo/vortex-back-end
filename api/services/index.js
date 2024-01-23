const UsuarioService = require('./usuariosSercice');
const RoleService = require('./roleService');
const PermissoesService = require('./permissaoService');
const SeguracaService = require('./seguracaService');
const ProdutoService = require('./produtosService');

module.exports = {
    UsuarioService: UsuarioService,
    RoleService: RoleService,
    PermissoesService: PermissoesService,
    SeguracaService: SeguracaService,
    ProdutoService: ProdutoService
}

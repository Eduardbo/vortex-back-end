const bodyParser = require('body-parser');

const usuario = require('./usuarioRouter')
const auth = require('./authRoute');
const role = require('./role');
const permissao = require('./permisao');
const seguraca = require('./seguraca');
const produto = require('./produtos');


module.exports = app => {
    app.use(
        bodyParser.json(),
        auth,                               //Rota publica
        usuario,                            ///Usando o autenticado, apartir dessa todas as rotas seram privadas
        produto, 
        role,
        permissao,
        seguraca
    )
}
const database = require('../models')

class Service {
    constructor(model){
        this.model = model
    }

    //CRUD básico herdado com todas as rotas

    async buscaGeral(){                            //Busca Geral
        return database[this.model].findAll()
    }

    async buscaPorId(id){                         //Busca por id
        return database[this.model].findOne(
            { where: { id: String(id)}  }
        )
    }

    async atualizacao(dadosAtualizados, id, transacao = {}){      //Atualizao por id
        return database[this.model].update( dadosAtualizados, { where: {id: String(id)} }, transacao )
    }
    
    async deleteGeral(id){                        //Delete Geral
        return database[this.model].destroy(
            { where: { id: String(id) }  }
        )
    }
}

module.exports = Service;
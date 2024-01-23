const AuthService = require('../services/authService')
const authService = new AuthService();

class authController{

    static async login(req, res){

        const informacoesDeLogin = req.body;

        try{
        
            const login = await authService.login(informacoesDeLogin);
            
            res.status(200).send(login)
        
        } catch(error){
            res.status(401).send({message: error.message})
        }
        
    }

}

module.exports = authController;
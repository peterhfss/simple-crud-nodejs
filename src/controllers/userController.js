const users = [ {email: 'pedroh.fss@gmail.com',senha:123, nome:'Pedro Henrique'}];

class UserController{

   index(req, res){
       return res.send(users);
        
    }

    store(req, res){
        const {email, senha, nome} = req.body;
        
        users.push(email, senha, nome);

        return res.json(users);
    }

    update(){
        
    }

    destroy(){
        
    }
}

export default new UserController();
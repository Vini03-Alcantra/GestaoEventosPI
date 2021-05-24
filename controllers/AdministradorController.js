var Administrador = require("../models/Administrador")

class AdministradorController{
    async index(req, res){
        var administrador = await Administrador.findAll()
        res.json(administrador)
    }

    async findLocal(req, res){
        var id = req.params.id;
        var administrador = await Administrador.findById(id)
        if (administrador != null || administrador != []) {
            res.statusCode = 200;
            res.json(administrador)
        } else {
            res.statusCode = 404
            res.json({})
        }
    }

    async create(req, res){
        var {nomeAdministrador, MatriculaAdministrador, password, Role_idRole} = req.body;
        
        var administrador = await Administrador.new(nomeAdministrador, MatriculaAdministrador, password, Role_idRole)
        res.statusCode = 200
        res.json(administrador)
    }

    async edit(req, res){
        var {IdAdministrador, nomeAdministrador, MatriculaAdministrador} = req.body;
        var result = await Administrador.update(IdAdministrador, nomeAdministrador, MatriculaAdministrador)
        if (result != undefined) {
            if (result.status) {
                res.statusCode = 200
                res.json(result)
            }else {
                res.statusCode = 406;
                res.json(result)
            }
        } else {
            res.statusCode = 406;
            res.json({msg: "Serviço Indisponível"})
        }
    }

    async remove(req, res){
        var id = req.params.id;
        var result = await Administrador.delete(id)
        if (result.status) {
            res.statusCode = 200
            res.json(result)
        } else {
            res.statusCode = 406;
            res.json({})
        }
    }
}

module.exports = new AdministradorController()
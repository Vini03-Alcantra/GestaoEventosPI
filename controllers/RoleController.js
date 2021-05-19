var Role = require("../models/Role")

class RoleController{
    async index(req, res){
        var role = await Role.findAll()
        res.json(role)
    }

    async findLocal(req, res){
        var id = req.params.id;
        var role = await Role.findById(id)
        if (role != undefined || role != []) {
            res.statusCode = 200
            res.json(role)
        } else {
            res.statusCode = 404
            res.json({})
        }
    }

    async create(req, res){
        var {nomeRole, descriptionRole} = req.body;
        var role = await Role.new(nomeRole, descriptionRole, Date.now())
        if (role.status) {
            res.statusCode = 200;
            res.json(role)
        } else {
            res.statusCode = 404;
            res.json(role)
        }
    }

    async edit(req, res){
        var {idRole, nomeRole, descriptionRole} = req.body;

        var role = await Role.update(idRole, nomeRole, descriptionRole)
        if (role != undefined) {
            if (result.status) {
                res.statusCode = 200
                res.json(role)
            } else {
                res.statusCode = 406
                res.json(role)
            }
        } else {
            res.statusCode = 406
            res.json({msg: "Serviço Indisponível"})
        }
    }

    async remove(req, res){
        var id = req.params.id
        var result = await Role.delete(id)
        if (result.status) {
            res.statusCode = 200
            res.json(result)
        } else {
            res.statusCode = 406
            res.json({})
        }
    }
}

module.exports = new RoleController()
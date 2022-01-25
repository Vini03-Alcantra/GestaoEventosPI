var Permission = require("../models/Permissions")

class PermissionController{
    async index(req, res){
        var permissions = await Permission.findAll()
        res.json(permissions)
    }

    async findPermission(req, res){
        var id = req.params.id;
        var permission = await Permission.findById(id)
        if (permission == [] || permission == undefined) {
            res.statusCode = 404;
            res.json({})
        } else {
            res.statusCode = 200;
            res.json(permission)
        }
    }

    async create(req, res){        
        var {namePermission, descriptionPermission} = req.body;
        
        try {
            var permission = Permission.new(namePermission, descriptionPermission)
            if (permission != undefined) {
                res.statusCode = 200;
                res.json({status: true, permission})
            } else {
                res.statusCode = 400;
                res.json({status: false, err: "Erro ao cadastrar"})
            }
        } catch (error) {
            res.statusCode = 400;
            res.json({status: false, err: "Serviço Indisponível"})
        }
    }

    async edit(req, res){
        var {idPermissions, namePermission, descriptionPermission} = req.body;
        var result = await Permission.update(idPermissions, namePermission, descriptionPermission)
        if (result != undefined) {
            if (result.status) {
                res.statusCode = 200;
                res.json(result)
            } else {
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
        var result = await Permission.delete(id)
        if (result.status) {
            res.statusCode = 200
            res.json(result)
        } else {
            res.statusCode = 406
            res.json(res)
        }
    }
}

module.exports = new PermissionController()
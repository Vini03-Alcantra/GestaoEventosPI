const FaleConosco = require("../models/FaleConosco")


class FaleConoscoController {
    async index(req, res){
        var FaleConoscoAll = await FaleConosco.findAll()
        res.json(FaleConoscoAll)
    }

    async findFaleConosco(req, res){
        var id = req.params.id;
        var faleConosco = await FaleConosco.findById(id)

        if (faleConosco != null || faleConosco != []) {
            res.status(200)
            res.json(faleConosco)
        } else {
            res.status(404)
            res.json({})
        }
    }

    async create(req, res){
        var {email, nome, descricao} = req.body;
        var faleConosco = await FaleConosco.new(email, nome, descricao)
        res.json(faleConosco)
    }
}

module.exports = new FaleConoscoController()
var Espaco = require("../models/Espaco")

class EspacoController {
    async index(req, res){
        var espacos = await Espaco.findAll()
        res.json(espacos)
    }

    async findLocal(req, res){
        var id = req.params.id;
        var espaco = await Espaco.findById(id)
        if (espaco == null || espaco == undefined) {
            res.statusCode = 404;
            res.json({})
        } else {
            res.statusCode = 200
            res.json(espaco)
        }
    }

    async create(req, res){
        var {NomeEspaco, QuantidadeLugar, DescricaoEspaco} = req.body;

        var espaco = await Espaco.new(NomeEspaco, QuantidadeLugar, DescricaoEspaco)
        res.statusCode = 200;
        res.send(espaco)
    }

    async edit(req, res){
        var {idEspaco, NomeEspaco, QuantidadeLugar, DescricaoEspaco} = req.body;
        var result = await Espaco.update(idEspaco, NomeEspaco, QuantidadeLugar, DescricaoEspaco)
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
        var result = await Espaco.delete(id)
        if (result.status) {
            res.statusCode = 200
            res.json(result)
        } else {
            res.statusCode = 406
            res.json(res)
        }
    }
    
}

module.exports = new EspacoController()
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

        await Espaco.new(NomeEspaco, QuantidadeLugar, DescricaoEspaco)
        res.statusCode = 200;
        res.send("Tudo ok")
    }
    
}

module.exports = new EspacoController()
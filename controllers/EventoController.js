const Espaco = require("../models/Espaco");
var Evento = require("../models/Evento")

class EventoController {
    async index(req, res){
        var eventos = await Evento.findAll()
        res.json(eventos)
    }

    async findEvento(req, res){
        var id = req.params.id;
        var evento = await Evento.findById(id)

        if (evento != null || evento != []) {
            res.status(200);
            res.json(evento)
        } else {
            res.status(404)
            res.json({})
        }
    }

    async create(req, res){
        var {EventoNome, EventoQuantidade, description, DataInicioEvento, DataFimEvento, CargaHorarioTotal, Espaco_idEspaco} = req.body;
        var evento = await Evento.new(EventoNome, EventoQuantidade, description, DataInicioEvento, DataFimEvento, CargaHorarioTotal, Espaco_idEspaco)
        res.status(200)
        res.json(evento)
    }

    async edit(req, res){
        var {idEvento, EventoNome, EventoQuantidade, DataInicioEvento, DataFimEvento, CargaHorarioTotal, Espaco_idEspaco} = req.body;
        var result = await Espaco.update(idEvento, EventoNome, EventoQuantidade, DataInicioEvento, DataFimEvento, CargaHorarioTotal, Espaco_idEspaco)
        if (result != undefined) {
            if (result.status) {
                res.status(200)
                res.json(result)
            } else {
                res.status(406)
                res.json(result)
            }
        } else {
            res.status(406)
            res.json({})
        }
    }

    async remove(req, res){
        var id = req.params.id
        var result = await Evento.delete(id)
        if (result.status) {
            res.status(200)
            res.json(result)
        } else {
            res.status(406)
            res.json({})
        }
    }
    
}

module.exports = new EventoController()
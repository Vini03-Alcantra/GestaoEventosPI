var Curso = require("../models/Curso")

class CursoController{
    async index(req, res){
        var curso = await Curso.findAll()
        res.json(curso)
    }

    async findCurso(req, res){
        var id = req.params.id;
        var curso = await Curso.findById(id)
        if (curso == [] || curso == undefined) {
            res.statusCode = 404;
            res.json(curso)            
        }else{
            res.statusCode = 200;
            res.json(curso)
        }
    }

    async create(req, res){
        var {nameCurso, AreaCurso} = req.body;

        var curso = await Curso.new(nameCurso, AreaCurso)
        if (curso.status) {
            res.statusCode = 200;
            res.json(curso)
        } else {
            res.statusCode = 404
            res.json(curso)
        }
    }

    async edit(req, res){
        var {idCurso, nameCurso, AreaCurso} = req.body
        var result = await Curso.update(idCurso, nameCurso, AreaCurso)
        if (result != undefined) {
            if (result.status) {
                res.statusCode = 200;
                res.json(result)
            } else {
                res.statusCode = 406
                res.json(result)
            }
        } else {
            res.statusCode = 406
            res.json({msg: "Serviço Indisponível"})   
        }
    }

    async remove(req, res){
        var id = req.params.id
        var result = await Curso.delete(id)
        if (result.status) {
            res.statusCode = 200;
            res.json(result)
        } else {
            res.statusCode = 406
            res.json(result)
        }
    }

    
}

module.exports = new CursoController()
var Curso = require("../models/Curso")

class CursoController{
    async index(req, res){
        var curso = await Curso.findAll()
        res.json(curso)
    }

    async findCurso(req, res){
        var id = req.params.id;
        var curso = await Curso.findById(id)
        if (curso == null || curso == undefined) {
            res.statusCode = 404;
            res.json({})            
        }else{
            res.statusCode = 200;
            res.json(curso)
        }
    }

    async create(req, res){
        var {nameCurso, AreaCurso} = req.body;

        await Curso.new(nameCurso, AreaCurso)
        res.statusCode = 200;
        res.send("all ok")
    }

    
}

module.exports = new CursoController()
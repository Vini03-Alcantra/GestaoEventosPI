var Professor = require("../models/Professor")

class ProfessorController{
    async index(req, res){
        var professor = await Professor.findAll()
        res.json(professor)
    }

    async findLocal(req, res){
        var id = req.params.id;
        var professor = await Professor.findById(id)
        if (professor != undefined || professor != []) {
            res.statusCode = 200;
            res.json(professor)
        } else {
            res.statusCode = 404
            res.json(professor)
        }
    }

    async create(req, res){
        var {nameProfessor, MatriculaProfessor, password, Curso_idCurso, Role_idRole} = req.body

        var professor = await Professor.new(nameProfessor, MatriculaProfessor, password, Curso_idCurso, Role_idRole)
        if (professor.status) {
            res.statusCode = 200
            res.json(professor)
        } else {
            res.statusCode = 404
            res.json(professor)
        }
    }

    async edit(req, res){
        var {idProfessor, nameProfessor, MatriculaProfessor, CursoProfessor} = req.body
        var result = await Professor.update(idProfessor, nameProfessor, MatriculaProfessor, CursoProfessor)
        if (result != undefined) {
            if (result.status) {
                res.statusCode = 200
                res.json(result)
            } else {
                res.statusCode = 406;
                res.json(result)
            }
        }else{
            res.statusCode = 406
            res.json({msg: "Serviço Indisponível"})
        }
    }

    async remove(req, res){
        var id = req.params.id
        var result = await Professor.delete(id)
        if (result.status) {
            res.statusCode = 200
            res.json(result)
        } else {
            res.statusCode = 406
            res.json({})
        }
    }
}

module.exports = new ProfessorController()
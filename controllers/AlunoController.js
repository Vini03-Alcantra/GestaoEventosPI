var Aluno = require("../models/Aluno")

class AlunoController {
    async index(req, res){
        var alunos = await Aluno.findAll()
        res.json(alunos)
    }

    async findLocal(req, res){
        var id = req.params.id;
        var aluno = await Aluno.findById(id)
        if (aluno != null || aluno != []) {
            res.statusCode = 200;
            res.json(aluno)
        } else {
            res.statusCode = 404;
            res.json({})
        }
    }

    async create(req, res){
        var {NomeAluno, emailAluno, MatriculaAluno, CpfAluno, password} = req.body;
                    
        var aluno = await Aluno.new(NomeAluno, emailAluno, MatriculaAluno, CpfAluno, password)
        res.statusCode = 200;
        res.json(aluno)
        
    }

    async edit(req, res){
        var {idAluno, NomeAluno, CpfAluno} = req.body;
        var result = await Aluno.update(idAluno, NomeAluno, CpfAluno)
        if (result != undefined) {
            if (result.status) {
                res.statusCode = 200
                res.json(result)
            } else {
                res.statusCode = 406
                res.json(result)
            }
        } else {
            res.statusCode = 406
            res.json({})    
        }
    }

    async remove(req, res){
        var id = req.params.id
        var result = await Aluno.delete(id)
        if (result.status) {
            res.statusCode = 200
            res.json(result)
        } else {
            res.statusCode = 406
            res.json({})
        }
    }
}

module.exports = new AlunoController()
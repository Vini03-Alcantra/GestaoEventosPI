var Aluno = require("../models/Aluno")

class AlunoController {
    async index(req, res){
        var alunos = await Aluno.findAll()
        res.json(alunos)
    }

    async findLocal(req, res){
        var id = req.params.id;
        var espaco = await Aluno.findByI
    }
}

module.exports = new AlunoController()
var knex = require("../database/connection")
var bcrypt = require("bcrypt")

class Aluno {
    async new(nome, email,  matricula, cpf, password){
        try {
            var hash = await bcrypt.hash(password, 12)
            await knex.insert({nome, email, matricula, cpf, password: hash}).table("aluno")
        } catch (error) {
            console.log(error)
            return undefined;
        }
    }

    async findAll(){
        try {
            var result = await knex.select(["idAluno", "NomeAluno", "emailAluno", "MatriculaAluno", "CpfAluno", "password", "Curso"]).table("aluno");
            return result;
        } catch (error) {
            console.log(err)
            return []
        }
    }

    async findByMatricula(matricula){
        try {
            var result = await knex.select(["idAluno", "NomeAluno", "emailAluno", "MatriculaAluno", "CpfAluno", "password", "Curso"]).where({MatriculaAluno: matricula})
            if(result.length > 0){
                return result[0]
            }else{
                return []
            }
        } catch (error) {
            console.log(error)
        }
    }

    async validation(email, matricula, cpf){
        var result = await knex.select("*").from("aluno").whereRaw(`emailAluno=${email} or MatriculaAluno=${matricula} or CpfAluno =${cpf}`)
        try {
            if (result.length > 0) {
                return true
            } else {
                return false
            }
        } catch (error) {
            console.log(error)
            return undefined;
        }
    }
}

module.exports = new Aluno();
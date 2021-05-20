var knex = require("../database/connection")
var bcrypt = require("bcrypt")

class Aluno {
    
    async findAll(){
        try {
            var result = await knex.select("*").from("aluno")
            return result;
        } catch (error) {
            console.log(error)
            return []
        }
    }
    
    async findByMatricula(matricula){
        try {
            var result = await knex.select("*").where({MatriculaAluno: matricula}).table("aluno")
            if(result.length > 0){
                return true
            }else{
                return false
            }
        } catch (error) {
            console.log(error)
        }
    }

    async findById(idAluno){
        try {
            var result = knex.select("*").where({idAluno: idAluno}).table("aluno")
            if(result.length > 0){
                return result[0]
            }else{
                return []
            }
        } catch (error) {
            console.error(error)
            return undefined
        }
    }
    
    async new(NomeAluno, emailAluno, MatriculaAluno, CpfAluno, password, Curso_idCurso){
        try {
            var hash = await bcrypt.hash(password, 12)
            await knex.insert({NomeAluno, emailAluno, MatriculaAluno, CpfAluno, password: hash, Curso_idCurso}).table("aluno")
            return {status: true}
        } catch (error) {
            console.log(error)
            return {status: true}
        }
    }

    async update(idAluno, NomeAluno, CpfAluno){
        var aluno = await this.findById(idAluno)
        if (aluno != undefined) {
            var editAluno = {}
            if (NomeAluno != null || NomeAluno != undefined) {
                editAluno.NomeAluno = NomeAluno
            }

            if(CpfAluno != null || CpfAluno != undefined){
                editAluno.CpfAluno = CpfAluno
            }

            try{
                await knex.update(editAluno).where({idAluno: idAluno}).table("aluno")
                return {status: true}
            }catch(error){
                console.error(error)
                return {status: false, err: "Serviço indisponível no momento"}
            }
        } else {
            return {status: false, err: "Aluno não encotrado"}
        }
    }

    async delete(idAluno){
        var aluno = await this.findById({idAluno: idAluno})
        if (aluno != null || aluno != []) {
            try {
                await knex.delete().where({idAluno: idAluno}).table("aluno")
                return {status: true}
            } catch (error) {
                console.error(error)
                return {status: false, err: "Serviço Indisponível no momento"}
            }
        } else {
            return {status: false, err: "Aluno não encontrado"}
        }
    }

    async validation(email, matricula, cpf){
        var result = await knex.select("*").whereRaw(`emailAluno=${email} or MatriculaAluno=${matricula} or CpfAluno =${cpf}`).from("aluno")
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
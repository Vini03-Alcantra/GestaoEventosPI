var knex = require("../database/connection")
var bcrypt = require("bcrypt")

class Aluno {
    
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

    async findById(idAluno){
        var result = knex.select("*").from("aluno").where({idAluno: idAluno})
        try {
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
    
    async new(NomeAluno, emailAluno, MatriculaAluno, CpfAluno, password){
        try {
            var hash = await bcrypt.hash(password, 12)
            await knex.insert({NomeAluno, emailAluno, MatriculaAluno, CpfAluno, password: hash}).table("aluno")
        } catch (error) {
            console.log(error)
            return undefined;
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
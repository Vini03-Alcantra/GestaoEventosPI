var knex = require("../database/connection")
var bcrypt = require("bcrypt")

class Professor {
    async findAll(){
        try {
            var result = await knex.select("*").from("professor")
            return result
        } catch (error) {
            console.error(error)
            return []
        }        
    }

    async findByName(nameProfessor){
        try {
            var result = knex.select("*").where({nameProfessor: nameProfessor}).table("professor")
            if (result.length > 0) {
                return true
            } else {
                return false
            }
        } catch (error) {
            console.error(error)
            return false
        }
    }

    async findById(idProfessor){
        try {
            var result = knex.select("*").where({idProfessor: idProfessor}).table("professor")
            if (result.length > 0) {
                return result[0]
            } else {
                return []
            }
        } catch (error) {
            console.error(error)
            return undefined
        }
    }

    async new(nameProfessor, MatriculaProfessor, password){
        try {
            var hash = await bcrypt.hash(password, 12)
            await knex.insert({nameProfessor, MatriculaProfessor, password: hash}).table("professor")
            return {status: true}
        } catch (error) {
            console.error(error)
            return {status: false}
        }
    }

    async update(idProfessor, nameProfessor, MatriculaProfessor, CursoProfessor){
        var professor = await this.findById()
        
        if (professor != undefined) {
            var editLocal = {}    
            if (nameProfessor != undefined) {
                if (nameProfessor != professor.nameProfessor) {
                    var result = await this.findByName(nameProfessor)
                    if (result != null) {
                        editLocal.nameProfessor = nameProfessor
                    }
                }
            }

            if (MatriculaProfessor != undefined) {
                editLocal.MatriculaProfessor = MatriculaProfessor
            }

            if(CursoProfessor != undefined){
                editLocal.CursoProfessor = CursoProfessor
            }

            try {
                await knex.update(editLocal).where({idProfessor: idProfessor}).table("professor")
                return {status: true}
            } catch (error) {
                return {status: false, err: "O professor não existe"}
            }
        } else {
            return {status: false, err: "Professor não existe"}
        }
    }

    async delete(idProfessor){
        var professor = await this.findById({idProfessor: idProfessor})
        if (professor != [] || professor != undefined) {
            try {
                await knex.delete().where({idProfessor: idProfessor}).table("professor")
                return {status: true}
            } catch (error) {
                console.error(error)
                return {status: false, msg: "Operação não pode ser realizada"}
            }
        } else {
            return {status: false, msg: "Professor não existe"}
        }
    }
}

module.exports = new Professor()
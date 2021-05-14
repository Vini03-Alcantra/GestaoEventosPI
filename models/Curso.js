var knex = require("../database/connection")

class Curso {
    async findAll(){
        try {
            var result = await knex.select("*").from("curso")
            return result;
        } catch (error) {
            console.log(error)
            return []
        }
    }

    async findByName(nameCurso){
        try {
            var result = await knex.select("*").where({nameCurso: nameCurso}).table("curso")
            if (result.length > 0) {
                return true
            } else {
                return false
            }
        } catch (error) {
            console.log(error)
            return undefined
        }
    }

    async findById(idCurso){
        try {
            var result = await knex.select("*").where({idCurso: idCurso}).table("curso")
            if (result.length > 0) {
                return result[0]
            } else {
                return []
            }
        } catch (error) {
            console.log(error)
            return undefined
        }
    }

    async new(nameCurso, AreaCurso){
        try {
            await knex.insert({nameCurso, AreaCurso}).table("curso")
        } catch (error) {
            console.log(error)
        }
    }
} 

module.exports = new Curso()
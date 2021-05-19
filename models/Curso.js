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
            return {status: true}
        } catch (error) {
            console.log(error)
            return {status: false}
        }
    }

    async update(idCurso, nameCurso, AreaCurso){
        var curso = await this.findById(idCurso)

        if (curso != undefined) {
            var editCurso = {}
            if (nameCurso != undefined) {
                if (nameCurso != curso.nameCurso) {
                    var result = await this.findByName(nameCurso)
                    if (result != undefined) {
                        editCurso.nameCurso = nameCurso;
                    }
                }
            }

            if (AreaCurso != undefined) {
                editCurso.AreaCurso = AreaCurso
            }

            try {
                await knex.update(editCurso).where({idCurso: idCurso}).table("curso")
                return {status: true}                
            } catch (error) {
                return {status: false, err: "Opetion is invalid"}
            }
        } else {
            return {status: false, err: "código de curso não existente"}
        }
    }

    async delete(idCurso){
        var curso = await this.findById({idCurso: idCurso})
        if (curso != [] || curso != undefined) {
            try {
                await knex.delete().where({idCurso: idCurso}).table("curso")
                return {status: true}
            } catch (error) {
                console.log(error)
                return {status: false}
            }
        } else {
            return {status: false, err: "The curso not exists"}
        }
    }
} 

module.exports = new Curso()
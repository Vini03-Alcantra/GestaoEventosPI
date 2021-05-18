var knex = require("../database/connection")

class Administrador{
    async findAll(){
        try {
            var result = await knex.select("*").from("administrador")
            return result;
        } catch (error) {
            console.log(error)
            return []
        }
    }

    async findByName(nomeAdministrador){
        var result = knex.select("*").from("administrador").where({nomeAdministrador: nomeAdministrador})
        if (result.length > 0) {
            return true
        }else{
            return false
        }        
    }

    async findById(IdAministrador){
        var result = knex.select("*").from("administrador").where({IdAministrador: IdAministrador})
        try {
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

    async new(nomeAdministrador, MatriculaAdministrador){
        try {
            await knex.insert({nomeAdministrador, MatriculaAdministrador}).table("administrador")            
        } catch (error) {
            console.error(error)
        }
    }

    async update(IdAministrador, nomeAdministrador, MatriculaAdministrador){
        var administrador = await this.findById(IdAministrador)

        if (administrador != undefined) {
            var editLocal = {}
            if (nomeAdministrador != undefined) {
                if (nomeAdministrador != administrador.nomeAdministrador) {
                    editLocal.nomeAdministrador = nomeAdministrador
                }
            }

            if (MatriculaAdministrador != null) {
                editLocal.administrador = administrador
            }

            try {
                await knex.update(editLocal).where({IdAministrador: IdAministrador}).table("administrador");
                return {status: true}
            } catch (error) {
                return {status: false, error: "Serviço indisponível no momento"}
            }
        } else {
            return {status: false, error: "Administrador não encontrado"}
        }
    }

    async delete(IdAdministrador){
        var administrador = await this.findById({IdAdministrador: IdAdministrador})
        if (administrador != null || administrador != []) {
            try {
                await knex.delete().where({IdAdministrador: IdAdministrador}).table("administrador")
                return {status: true}
            } catch (error) {
                console.error(error)
                return {status: false, msg: "Serviço Indisponível"}
            }
        } else {
            return {status: false, msg: "Administrador não encontrado"}
        }
    }
}

module.exports = new Administrador()
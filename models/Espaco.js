var knex = require("../database/connection")

class Espaco {
    async findAll(){
        try {
            var result = knex.select(["idEspaco", "NomeEspaco", "QuantidadeLugar", "DescricaoLugar"]).table("espaco")
            return result
        } catch (error) {
            console.log(error)
            return []
        }
    }

    async findByName(NomeEspaco){
        var result = knex.select("*").from("espaco").where({NomeEspaco: NomeEspaco})
        if (result.length > 0) {
            return true
        } else {
            return false
        }
    }

    async findById(id){
        var result = knex.select("*").from("espaco").where({idEspaco: id})
        try {
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

    async new(NomeEspaco, QuantidadeLugar, DescricaoEspaco){
        try {
            await knex.insert({NomeEspaco, QuantidadeLugar, DescricaoEspaco}).table("espaco")
        } catch (error) {
            console.log(error)
        }        
    }


}

module.exports = new Espaco()
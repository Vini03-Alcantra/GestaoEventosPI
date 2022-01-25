var knex = require("../database/connection")

class Espaco {
    async findAll(){
        try {            
            var result = await knex.select("*").from("espaco")
            return result
        } catch (error) {
            console.log(error)
            return []
        }
    }

    async findByName(NomeEspaco){
        try {
            var result = knex.select("*").where({NomeEspaco: NomeEspaco}).table("espaco")
            if (result.length > 0) {
                return true
            } else {
                return false
            }
        } catch (error) {
            console(error)
            return undefined
        }
    }

    async findById(id){
        try {
            var result = await knex.select("*").where({idEspaco: id}).table("espaco")
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

    async new(NomeEspaco, QuantidadeLugar, DescricaoEspaco){
        try {
            await knex.insert({NomeEspaco, QuantidadeLugar, DescricaoEspaco}).table("espaco")
            return {status:true}
        } catch (error) {
            console.log(error)
            return undefined
        }        
    }

    async update(idEspaco, NomeEspaco, QuantidadeLugar, DescricaoEspaco){
        var espaco = await this.findById(idEspaco)

        if (espaco != undefined) {
            var editLocal = {};
            if (NomeEspaco != undefined || NomeEspaco != []) {
                if (NomeEspaco != espaco.NomeEspaco) {
                    var result = await this.findByName(NomeEspaco)
                    if(result != null) {
                        editLocal.NomeEspaco = NomeEspaco
                    }
                }
            }
            
            if (QuantidadeLugar != undefined) {
                editLocal.QuantidadeLugar = QuantidadeLugar
            }

            if (DescricaoEspaco != undefined) {
                editLocal.DescricaoEspaco = DescricaoEspaco
            }

            try {
                await knex.update(editLocal).where({idEspaco: idEspaco}).table("espaco")
                return {status: true}
            } catch (error) {
                return {status:false, err: "O Local não existe"}
            }
        }else{
            return {status:false, err: "The local not exists"}
        }        
    }

    async delete(idEspaco){
        var espaco = await this.findById({idEspaco: idEspaco})
        if (espaco != [] || espaco != null ) {
            try {
                await knex.delete().where({idEspaco: idEspaco}).table("espaco")
                return {status: true}
            } catch (error) {
                console.error(error)
                return {status: false}
            }
        } else {
            return {status: false, err: "The local not exists, so he don't can be deleted"}
        }
    }
}

module.exports = new Espaco()
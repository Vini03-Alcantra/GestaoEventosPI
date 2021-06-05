var knex = require("../database/connection")


class FaleConosco{
    async findAll(){
        try {
            var result = await knex.select("*").from("fale_conosco")
            return result
        } catch (error) {
            console.error(error)
            return []
        }
    }

    async findById(idFaleConosco){
        try {
            var result = await knex.select("*").where({id: idFaleConosco}).table("fale_conosco")
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

    async new(email, nome, descricao){
        try {
            await knex.insert({email, nome, descricao}).table("fale_conosco")
            return {status: true}
        } catch (error) {
            console.error(error)
            return {status: false}
        }
    }

    async update(id, email, nome, descricao){
    
        try {
            
        } catch (error) {
            
        }
    }

    async delete(id){
        try {
            
        } catch (error) {
            
        }
    }
}

module.exports = new FaleConosco()
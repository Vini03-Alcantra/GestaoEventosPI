var knex = require("../database/connection")

class Role {
    async findAll(){
        try {
            var result = await knex.select("*").from("role")
            return result
        } catch (error) {
            console.error(error)
            return []
        }
    }

    async findByName(nameRole){
        var result = knex.select("*").from("role").where({nameRole: nameRole})
        if (result.length > 0) {
            return true
        } else {
            return false
        }
    }

    async findById(idRole){
        var result = knex.select("*").from("role").where({idRole: idRole})
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

    async new(nomeRole, descriptionRole, createdAt){
        try {
            await knex.insert({nomeRole, descriptionRole, createdAt}).table("role")
        } catch (error) {
            console.error(error)
        }
    }

    async update(idRole, nomeRole, descriptionRole){
        var role = await this.findById(idRole)

        if (role != undefined) {
            var editRole = {}
            if (nomeRole != undefined) {
                if (nomeRole != role.nomeRole) {
                    var result = this.findByName(nomeRole)
                    if (result.length > 0) {
                        editRole.nomeRole = nomeRole
                    }
                }
            }

            if (descriptionRole != undefined) {
                editRole.descriptionRole = descriptionRole
            }

            try {
                await knex.update(editRole).where({idRole: idRole}).table("role")
                return {status: true}
            } catch (error) {
                return {status: false, msg: "Serviço Indisponível no momento"}
            }
        } else {
            return {status: false, err: "Role not exists"}   
        }
    }

    async delete(idRole){
        var role = await this.findById({idRole: idRole})
        if (role != [] || role != undefined) {
            try {
                await knex.delete().where({idRole: idRole}).table("role")
                return {status: true}
            } catch (error) {
                console.error(error)
                return {status: false, err: "Serviço Insiponível no momento"}
            }
        } else {
            return {status: false, err: "Role não encontrada"}
        }
    }

}

module.exports = new Role();
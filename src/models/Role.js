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
        if (result.length > 0) {
            var result = await knex.select("*").where({nameRole: nameRole}).table("role")
            return true
        } else {
            return false
        }
    }

    async findById(idRole){
        try {
            var result = await knex.select("*").where({idRole: idRole}).table("role")
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

    async new(nomeRole, descriptionRole, permissions){
        try {
            var role = await knex.insert({nomeRole, descriptionRole}).table("role")  
            await permissions.forEach(element => {
                this.rolePermissions(element, role)
            });                           
            return {status: true}
            
        } catch (error) {
            console.error(error)
            return {status: false}
        }
    }

    async update(idRole, nomeRole, descriptionRole){
        var role = await this.findById(idRole)

        if (role != undefined) {
            var editRole = {}
            if (nomeRole != undefined) {
                if (nomeRole != role.nomeRole) {
                    var result = this.findByName(nomeRole)
                    if (result != null) {
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
                return {status: false, msg: "Servi??o Indispon??vel no momento"}
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
                return {status: false, err: "Servi??o Insipon??vel no momento"}
            }
        } else {
            return {status: false, err: "Role n??o encontrada"}
        }
    }


    async rolePermissions(Permissions_idPermissions, Role_idRole){
        try {
            await knex.insert({Permissions_idPermissions, Role_idRole}).table("permissions_has_role")
            return {status: true}
        } catch (error) {
            console.error(error)
            return {status: false}
        }
    }
}

module.exports = new Role();
var knex = require("../database/connection")

class Permissions{
    async findAll(){
        try {
            var result = await knex.select("*").from("permissions")
            return result;
        }catch(err){
            console.error(err)
            return []
        }
    }

    async findByName(namePermission){        
        try {
            var result = knex.select("*").where({namePermission: namePermission}).table("permissions")
            if (result.length > 0) {
                return true
            } else {
                return false
            }            
        } catch (error) {
            console.error(error)
            return undefined
        }
    }

    async findById(idPermissions){
        try {
            var result = knex.select("*").where({idPermissions: idPermissions}).table("permissions")
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

    async new(namePermission, descriptionPermission){
        try {            
            await knex.insert({namePermission, descriptionPermission}).table("permissions")       
            return {status: true}
        } catch (error) {
            console.log(error)
            return {status: false}
        }
    }

    async update(idPermissions, namePermission, descriptionPermission){
        var permissions = await this.findById(idPermissions);

        if (permissions != undefined) {
            var editLocal = {}
            if (namePermission != undefined) {
                if (permissions.namePermission != namePermission) {
                    editLocal.namePermission = namePermission;
                }
            }

            if (descriptionPermission != undefined) {
                editLocal.descriptionPermission = descriptionPermission
            }

            try {
                await knex.update(editLocal).where({idPermissions: idPermissions}).table("permissions")
                return {status: true}
            } catch (error) {
                return {status: false, msg: "Serviço Indisponível no momento"}
            }
        } else {
            return {status: false, msg: "Permission não existente"}
        }
    }

    async delete(idPermissions){
        var permission = await this.findById({idPermissions: idPermissions})
        if (permission != [] || permission != null) {
            try {
                await knex.delete().where({idPermissions: idPermissions}).table("permissions")
                return {status: true}
            } catch (error) {
                return {status: false, msg: "Serviço Indisponível no momento"}
            }
        } else {
            return {status: false, msg: "permission not exists"}
        }
    }
}

module.exports = new Permissions()
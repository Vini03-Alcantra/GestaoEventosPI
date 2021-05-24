var knex = require("../database/connection")

class Evento {
    
    async findAll(){
        try {
            var result = await knex.select("*").from("evento")
            return result
        } catch (error) {
            console.error(error)
            return []
        }
    }

    async findById(idEvento){
        try {
            var result = await knex.select("*").where({idEvento: idEvento}).table("evento")
            if (result.length > 0) {
                return true
            } else {
                return false
            }
        } catch (error) {
            console.error(error)
            return []
        }
    }

    async new(EventoNome, EventoQuantidade, DataInicioEvento, DataFimEvento, CargaHorarioTotal, Espaco_idEspaco){
        try {
            await knex.insert({EventoNome, EventoQuantidade, DataInicioEvento, DataFimEvento, CargaHorarioTotal, Espaco_idEspaco}).table("evento")
            return {status: true}
        } catch (error) {
            console.error(error)
            return {status: false}
        }
    }

    async update(idEvento, EventoNome, EventoQuantidade, DataInicioEvento, DataFimEvento, CargaHorarioTotal, Espaco_idEspaco){
        var evento = this.findById(idEvento)

        if (evento != undefined || evento != null) {
            var editEvento = {}
            if (EventoNome != undefined || EventoNome != null) {
                editEvento.EventoNome = EventoNome;
            }

            if (EventoQuantidade != undefined ||EventoQuantidade != null) {
                editEvento.EventoQuantidade = EventoQuantidade;
            }

            if (DataInicioEvento != undefined ||DataInicioEvento != null) {
                editEvento.DataInicioEvento = DataInicioEvento
            }

            if (DataFimEvento != undefined ||DataFimEvento != null) {
                editEvento.DataFimEvento = DataFimEvento
            }

            if (CargaHorarioTotal != undefined || CargaHorarioTotal != null) {
                editEvento.CargaHorarioTotal = CargaHorarioTotal
            }

            if (Espaco_idEspaco != undefined ||Espaco_idEspaco != null) {
                editEvento.Espaco_idEspaco = Espaco_idEspaco;
            }

            try {
                await knex.update(editEvento).where({idEvento: idEvento}).table("evento")
                return {status: true}
            } catch (error) {
                console.error(error)
                return {status: false, err: "Serviço indisponível no momento"}
            }
        }else{
            return {status: false, err: "Evento não encontrado"}
        }
    }

    async delete(idEvento){
        var evento = await this.findById({idEvento: idEvento})
        if (evento != null || evento != []) {
            try {
                await knex.delete().where({idEvento: idEvento}).table("evento")
                return {status: true}
            } catch (error) {
                console.error(error)
                return {status: false, err: "Serviço indisponível no momento"}
            }
        } else {
            return {status: false, err: "Evento não encontrado"}
        }
    }
}

module.exports = new Evento()
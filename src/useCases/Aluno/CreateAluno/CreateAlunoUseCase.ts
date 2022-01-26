import { Aluno } from "../../../entitites/Aluno";
import { IAlunoRepository } from "repositories/IAlunoRepository";
import { CreateAlunoDTO } from "./CreateAlunoDTO";

export class CreateAlunoUseCase {
    constructor(
        private alunosRepository: IAlunoRepository 
    ){}

    async execute(data: CreateAlunoDTO){
        const alunoAlreadyExists = await this.alunosRepository.findAluno(data.emailAluno, data.MatriculaAluno, data.CpfAluno)

        if(alunoAlreadyExists){
            throw new Error("Aluno Already Exists")
        }

        const aluno = new Aluno(data)

        await this.alunosRepository.create(aluno)
    }
}
import { Aluno } from "entitites/Aluno";
import { IAlunoRepository } from "repositories/IAlunoRepository";
import { CreateAlunoDTO } from "useCases/Aluno/CreateAluno/CreateAlunoDTO";

export class PostgresUsersRepository implements IAlunoRepository{
    private aluno: Aluno[] = []
    
    async index(): Promise<Aluno[]> {
        const alunos = await this.aluno;

        return alunos
    }

    async findAluno(email: string, cpf: string, matricula: string): Promise<Aluno> {
        const aluno = this.aluno.find((res) => res.CpfAluno === cpf)
        return aluno
    }
    
    async create(data: CreateAlunoDTO): Promise<void> {
        await this.aluno.push(data) 
    }

    update(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    remove(): Promise<void> {
        throw new Error("Method not implemented.");
    }

}
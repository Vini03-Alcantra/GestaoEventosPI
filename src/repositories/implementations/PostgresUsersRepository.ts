import { Aluno } from "entitites/Aluno";
import { IAlunoRepository } from "repositories/IAlunoRepository";
import { CreateAlunoDTO } from "useCases/Aluno/CreateAluno/CreateAlunoDTO";

export class PostgresUsersRepository implements IAlunoRepository{
    private aluno: Aluno[] = []
    
    async index(): Promise<Aluno[]> {
        const alunos = await this.aluno;

        return alunos
    }
    findAluno(email: string, cpf: string, matricula: string): Promise<Aluno> {
        throw new Error("Method not implemented.");
    }
    create(data: CreateAlunoDTO): Promise<void> {
        throw new Error("Method not implemented.");
    }
    update(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    remove(): Promise<void> {
        throw new Error("Method not implemented.");
    }

}
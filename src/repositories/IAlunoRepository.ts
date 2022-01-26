import { Aluno } from "entitites/Aluno";
import { CreateAlunoDTO } from "useCases/Aluno/CreateAluno/CreateAlunoDTO";

export interface IAlunoRepository {
    index(): Promise<Aluno[]>;
    findAluno(email: string, cpf: string, matricula: string): Promise<Aluno>;
    create(data: CreateAlunoDTO): Promise<void>;
    update(): Promise<void>;
    remove(): Promise<void>
}
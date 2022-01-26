import {Request, Response} from "express"
import { CreateAlunoUseCase } from "./CreateAlunoUseCase"

export class CreateAlunoController {
    constructor(
        private createAlunoUseCase: CreateAlunoUseCase
    ){}

    async handle(req: Request, res: Response): Promise<Response>{
        const {NomeAluno, emailAluno, MatriculaAluno, CpfAluno, password, Curso_idCurso} = req.body;

        try {
            await this.createAlunoUseCase.execute({
                NomeAluno,
                emailAluno,
                MatriculaAluno,
                CpfAluno,
                password,
                Curso_idCurso
            })
            
            return res.status(201).send()
        } catch (err) {
            return res.status(400).json({
                message: err.message || "Unespected error"
            })
        }
    }
}

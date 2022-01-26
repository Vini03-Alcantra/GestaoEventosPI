import { PostgresUsersRepository } from "../../../repositories/implementations/PostgresUsersRepository";
import { CreateAlunoController } from "./CreateAlunoController";
import { CreateAlunoUseCase } from "./CreateAlunoUseCase";

const postgresAlunoRepository = new PostgresUsersRepository()

const createAlunoUseCase = new CreateAlunoUseCase(
    postgresAlunoRepository
)

const createAlunoController = new CreateAlunoController(
    createAlunoUseCase
)

export {createAlunoController}
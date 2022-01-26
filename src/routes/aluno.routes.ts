import aluno from "../controllers/AlunoController"
import express from "express" 

import {createAlunoController} from "../useCases/Aluno/CreateAluno/index"
const router = express()

// router.post("/", aluno.create)
router.get("/", aluno.index)
router.get("/:id", aluno.findLocal)
router.put("/", aluno.edit)
router.delete("/", aluno.remove)

router.post('/', (req, res) => {
    return createAlunoController.handle(req, res)
})


module.exports = router
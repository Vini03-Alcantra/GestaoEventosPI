const aluno = require("../controllers/AlunoController")
const express = require("express") 

const router = express()

router.post("/", aluno.create)
router.get("/", aluno.index)
router.get("/:id", aluno.findLocal)
router.put("/", aluno.edit)
router.delete("/", aluno.remove)

module.exports = router
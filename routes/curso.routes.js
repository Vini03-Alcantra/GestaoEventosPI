const curso = require("../controllers/CursoController")
const express = require("express") 

const router = express()


router.post("/", curso.create)
router.get("/", curso.index)
router.get("/:id", curso.findCurso)
router.put("/", curso.edit)
router.delete("/:id", curso.remove)

module.exports = router
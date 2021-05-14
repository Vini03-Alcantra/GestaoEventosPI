var router = require("express")()
const espaco = require("../controllers/EspacoController");
const curso = require("../controllers/CursoController")


router.post("/espaco", espaco.create)
router.post("/curso", curso.create)
router.get("/curso", curso.index)
router.get("/curso/:id", curso.findCurso)

module.exports = router
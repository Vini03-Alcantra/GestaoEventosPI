var router = require("express")()
const espaco = require("../controllers/EspacoController");
const curso = require("../controllers/CursoController")


router.post("/espaco", espaco.create)
router.get("/espaco", espaco.index)
router.get("/espaco/:id", espaco.findLocal)
router.put("/espaco", espaco.edit)
router.delete("/espaco/:id", espaco.remove)
router.post("/curso", curso.create)
router.get("/curso", curso.index)
router.get("/curso/:id", curso.findCurso)
router.put("/curso/", curso.edit)
router.delete("/curso/:id", curso.remove)

module.exports = router
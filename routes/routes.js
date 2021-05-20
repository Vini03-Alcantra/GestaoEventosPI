var router = require("express")()
const espaco = require("../controllers/EspacoController");
const curso = require("../controllers/CursoController")
const permission = require("../controllers/PermissionController")

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

router.post("/permission", permission.create)
router.get("/permission", permission.index)
router.get("/permission/:id", permission.findPermission)
router.put("/permission", permission.edit)
router.delete("/permission/:id", permission.remove)





module.exports = router
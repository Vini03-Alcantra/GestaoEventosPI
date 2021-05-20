var router = require("express")()
const espaco = require("../controllers/EspacoController");
const curso = require("../controllers/CursoController")
const permission = require("../controllers/PermissionController")
const role = require("../controllers/RoleController")


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

router.post("/role", role.create)
router.get("/role", role.index)
router.get("/role/:id", role.findLocal)
router.put("/role", role.edit)
router.delete("/role/:id", role.remove)



module.exports = router
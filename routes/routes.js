var router = require("express")()
const espaco = require("../controllers/EspacoController");
const curso = require("../controllers/CursoController")
const permission = require("../controllers/PermissionController")
const role = require("../controllers/RoleController")
const professor = require("../controllers/ProfessorController")
const aluno = require("../controllers/AlunoController")
const administrador = require("../controllers/AdministradorController")
const evento = require("../controllers/EventoController")

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

router.post("/professor", professor.create)
router.get("/professor", professor.index)
router.get("/professor/:id", professor.findLocal)
router.put("/professor", professor.edit)
router.delete("/professor", professor.remove)

router.post("/aluno", aluno.create)
router.get("/aluno", aluno.index)
router.get("/aluno/:id", aluno.findLocal)
router.put("/aluno", aluno.edit)
router.delete("/aluno", aluno.remove)

router.post("/administrador", administrador.create)
router.get("/administrador", administrador.index)
router.get("/administrador/:id", administrador.findLocal)
router.put("/administrador", administrador.edit)
router.delete("/administrador", administrador.remove)

router.post("/evento", evento.create)
router.get("/evento", evento.index)
router.get("/evento/:id", evento.findEvento)
router.put("/evento", evento.edit)
router.delete("/evento", evento.remove)


module.exports = router
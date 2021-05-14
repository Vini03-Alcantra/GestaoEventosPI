var router = require("express")()
const espaco = require("../controllers/EspacoController");
const curso = require("../controllers/CursoController")


router.post("/espaco", espaco.create)
router.post("/curso", curso.create)
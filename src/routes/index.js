const express = require("express") 

const administradorRouter = require("./administrador.routes")
const alunoRouter = require('./aluno.routes')
const cursoRouter = require('./curso.routes')
const espacoRouter = require('./espaco.routes')
const eventoRouter = require('./evento.routes')
const faleConoscoRouter = require('./fale_conosco.routes')
const permissionRouter = require('./permission.routes')
const professorRouter = require('./professor.routes')
const roleRouter = require('./role.routes')

const router = express()

router.use("/administrador", administradorRouter)
router.use("/aluno", alunoRouter)
router.use("/curso", cursoRouter)
router.use("/espaco", espacoRouter)
router.use("/evento", eventoRouter)
router.use("/faleConosco", faleConoscoRouter)
router.use("/permission", permissionRouter)
router.use("/professor", professorRouter)
router.use("/role", roleRouter)

module.exports = router
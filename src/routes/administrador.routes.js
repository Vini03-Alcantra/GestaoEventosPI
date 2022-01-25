const administrador = require("../controllers/AdministradorController")
const express = require("express") 

const router = express()


router.post("/", administrador.create)
router.get("/", administrador.index)
router.get("/:id", administrador.findLocal)
router.put("/", administrador.edit)
router.delete("/", administrador.remove)

module.exports = router
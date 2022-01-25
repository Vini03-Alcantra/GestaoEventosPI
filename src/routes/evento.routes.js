const evento = require("../controllers/EventoController")
const express = require("express") 

const router = express()


router.post("/", evento.create)
router.get("/", evento.index)
router.get("/:id", evento.findEvento)
router.put("/", evento.edit)
router.delete("/:id", evento.remove)

module.exports = router
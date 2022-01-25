const faleConosco = require("../controllers/FaleConoscoController")
const express = require("express") 

const router = express()


router.post("/", faleConosco.create)
router.get("/", faleConosco.index)
router.get("/:id", faleConosco.findFaleConosco)

module.exports = router
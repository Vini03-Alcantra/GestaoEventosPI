const espaco = require("../controllers/EspacoController");
const express = require("express") 

const router = express()

router.post("/", espaco.create)
router.get("/", espaco.index)
router.get("/:id", espaco.findLocal)
router.put("/", espaco.edit)
router.delete("/:id", espaco.remove)

module.exports = router
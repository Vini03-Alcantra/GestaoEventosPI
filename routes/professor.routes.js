const professor = require("../controllers/ProfessorController")
const express = require("express") 

const router = express()


router.post("/", professor.create)
router.get("/", professor.index)
router.get("/:id", professor.findLocal)
router.put("/", professor.edit)
router.delete("/", professor.remove)

module.exports = router;
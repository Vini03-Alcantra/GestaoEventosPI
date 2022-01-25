const role = require("../controllers/RoleController")
const express = require("express") 

const router = express()

router.post("/", role.create)
router.get("/", role.index)
router.get("/:id", role.findLocal)
router.put("/", role.edit)
router.delete("/:id", role.remove)

module.exports = router
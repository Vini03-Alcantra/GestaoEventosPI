const permission = require("../controllers/PermissionController")
const express = require("express") 

const router = express()

router.post("/", permission.create)
router.get("/", permission.index)
router.get("/:id", permission.findPermission)
router.put("/", permission.edit)
router.delete("/", permission.remove)

module.exports = router
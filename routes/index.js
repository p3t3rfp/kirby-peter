const express = require('express')
const router = express.Router()
const linkController = require('../controllers/linkController.js')

//routes
router.get("/", linkController.index)
// router.get("/new", linkController.new)
// router.post("/",linkController.create)
router.get("/:linkId", linkController.show)
router.get("/:linkId/edit", linkController.edit)
// router.put('/:linkId', linkController.update)
// router.delete("/:linkId", linkController.delete)


module.exports = router
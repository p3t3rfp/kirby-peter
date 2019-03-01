const express = require('express')
const router = express.Router()
const linkController = require('../controllers/linkController.js')

//routes
router.get("/", linkController.index)
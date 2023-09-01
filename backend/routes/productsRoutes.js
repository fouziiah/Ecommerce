const express = require('express')

const router = express.Router()

const productsRoute = require('../controllers/productsController')

router.get('/products', productsRoute.index)
module.exports = router
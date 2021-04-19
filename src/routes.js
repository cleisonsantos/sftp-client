const express = require('express')
const routes = express.Router()


routes.get('/api', (req, res) => res.json({ msg: "It's working" }))

module.exports = routes
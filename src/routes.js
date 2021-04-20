const express = require('express')
const sftpController = require('./controllers/sftpController')
const routes = express.Router()


routes.get('/api', (req, res) => res.json({ msg: "It's working" }))

routes.get('/api/sftp/', sftpController.index)

module.exports = routes
require('dotenv').config()
const fs = require('fs')
const Client = require('ssh2-sftp-client')
let sftp = new Client



sftp = sftp.connect(config)

module.exports = sftp
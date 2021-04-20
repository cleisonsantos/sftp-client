require('dotenv').config()
const fs = require('fs')
const Client = require('ssh2-sftp-client')
const sftp = new Client

const config = {
    host: process.env.SFTP_HOST,
    port: process.env.SFTP_PORT,
    username: process.env.SFTP_USERNAME,
    privateKey: fs.readFileSync(process.env.SFTP_PRIVATEKEY)
}

module.exports = {

    async index(req, res) {

        try {

            let dir = ""
            req.params.dir ? dir = req.params.dir.replace(/-/g, "/") : dir
            // return console.log(dir)
            await sftp.connect(config)
            const data = await sftp.list(`/home/${config.username}/${dir}`)
            res.send(data)
            await sftp.end()

        } catch (error) {

            console.log(error)

        }

    }

}
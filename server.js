require('dotenv').config()
const express = require('express')
const routes = require('./src/routes')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended:false }))
app.use(routes)

const port = parseInt(process.env.PORT);

app.listen(port, () => console.log(`Server is running in port ${port}`))
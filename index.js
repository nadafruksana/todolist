const express = require('express')
const app = express()
const cors =require('cors')
const configureDB = require('./config/database')
configureDB()
const routes = require('./config/routes')
const port = 3050

app.use(express.json())
app.use('/', routes)
app.use(cors())

app.listen(port, () => {
    console.log('listening on port', port)
})

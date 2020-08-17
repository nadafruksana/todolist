const express = require('express')
const cors = require('cors')
const app = express()
const port = 3033

// setup db
const configureStore = require('./config/database')
configureStore()

// enable express to parse json data
app.use(express.json())
app.use(cors())

app.use(function(req,res,next){
    console.log(`${req.ip}- ${req.method} - ${req.url} - ${new Date()} - {JSON.stringify(req.body)}`)
    next()
})

// setup routes
const routes = require('./config/routes')
app.use('/', routes)

app.listen(port, () => {
    console.log('listening on port', port)
})
const express = require("express");
const app = express()
const config = require('./src/config/config')
const routes = require('./src/routes')
const database = require('./src/config/database')


// Middlewares
app.use(express.urlencoded({ extended: false }))


// Routes
app.use('/', routes)


// static files
app.use('/', express.static('public'))
    //views
app.set('views', './src/views')
app.set('view engine', 'pug')

//connect database
database.connect();





app.listen(config.port, () => {
    console.log(`App listening on port ${config.port}`)
})
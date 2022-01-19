const express = require("express");
const app = express()
const port = 3000

const routes = require('./src/routes')


// Middlewares
app.use(express.urlencoded({ extended: false }))

// Routes
app.use('/', routes)


// static files
app.use('/', express.static('public'))
//views
app.set('views', './src/views')
app.set('view engine', 'pug')

//post







app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})

const express = require('express')
const app = express()
const methodOverride = require('method-override')
const logger = require('morgan')
const routes = require("./routes/index")

//middleware
app.use(express.urlencoded({ extended: true }))//allows to pull params out of url
app.use(express.json())
app.use(methodOverride('_method')) //allows you to put and delete

//view engine
app.set('view engine', 'hbs')//allows view engine to accept handlebars

//public directory
app.use(express.static(__dirname + '/public'))

//set logger
app.use(logger('dev'))

//set routes middleware
app.use('/', routes)

//set app to listen
const PORT = process.env.PORT || 3000
app.listen(PORT , () => {
    console.log(`app is listening on ${PORT}`)
})






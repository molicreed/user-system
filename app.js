const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')


app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')


app.use(bodyParser.json({
    limit: '100kb'
}))

app.use(bodyParser.urlencoded({
    extended: true
}))

// app.use(express.static(path.join(__dirnamem, 'public')))


app.use('/', require('./routes'))

app.listen('3000', ()=>{
    console.log('listening on 3000--------')
})
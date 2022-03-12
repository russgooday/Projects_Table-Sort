const path = require('path')
const express = require('express')
const routes = require('./routes/index')
const ejs = require('ejs')
const app = express()
const PORT = 3000

app.set('view engine', 'ejs')

// static links for js, css, images etc
app.use(express.static(path.join(__dirname, '/public')))

app.use(routes)

app.listen(PORT, () => console.log('connected'))

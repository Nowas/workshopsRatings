'use strict'
var express = require('express')
var path = require('path')
var app = express()
var config = require('./config')
var router = require('./routes')(config)

app.use(require('body-parser').json({ type: 'json' }))
app.use(router)
app.use(express.static(path.join(__dirname, './public')));

app.listen(process.env.PORT || 3000)


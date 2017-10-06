'use strict'
var express = require('express')
var path = require('path')
var app = express()
var config = require('./config')
var router = require('./routes')(config)

app.use(require('body-parser').json({ type: 'json' }))
app.use(router)
app.use(express.static(path.join(__dirname, './public')));

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./results.db');
db.serialize(function() {
    db.run("CREATE TABLE if not exists workshops_ratings (symbol TEXT, ratings INTEGER, ts TEXT)");
    app.listen(process.env.PORT || 3000)
})


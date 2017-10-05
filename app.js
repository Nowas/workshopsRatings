'use strict'
var app = require('express')()
var config = require('./config')
var router = require('./routes')(config)

app.use(require('body-parser').json({ type: 'json' }))
app.use(router)

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./results.db');
db.serialize(function() {
    db.run("CREATE TABLE if not exists workshops_ratings (symbol TEXT, ratings INTEGER)");
    app.listen(process.env.PORT || 3000)
})


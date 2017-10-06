'use strict'


var template = require('../templates/workshopList')
var templateDetails = require('../templates/workshopSite')
var pug = require('pug')
var sqlite3 = require('sqlite3').verbose();

var mysql = require('mysql');
module.exports = function (config) {

    function getWorkshopList(request, response) {
        var workshopList = []

        for (var propertyName in config.workshops) {
            workshopList.push({
                symbol: propertyName,
                name: config.workshops[propertyName]
            })
        }

        var html = pug.render(template, {
            'workshops': workshopList
        })
        response.send(html)
    }

    function rateWorkshop(request, response) {
        var db = new sqlite3.Database('results.db');
        
        var connection = mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USR,
            password: process.env.DB_PWD,
            database: process.env.DB_NAME,
            port: 3306
        });

        var ratings = {
            symbol: request.params.workshopSymbol,
            ratings: request.params.workshopRatings,
            ts: new Date().toISOString()
        }
        connection.connect();
        connection.query('INSERT INTO workshops_ratings SET ?', ratings, function (error, results, fields) {
            connection.end();
        });

        var html = pug.render(templateDetails, {
            'workshopsSymbol': request.params.workshopSymbol,
            'workshopsName': config.workshops[request.params.workshopSymbol],
            'info': 'Thx'
        })
        response.send(html)
    }

    function getWorkshopDetails(request, response) {
        var html = pug.render(templateDetails, {
            'workshopsSymbol': request.params.workshopSymbol,
            'workshopsName': config.workshops[request.params.workshopSymbol],
            'info': 'Thx'
        })
        response.send(html)
    }

    function getWorkshopResults(request, response) {
        var connection = mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USR,
            password: process.env.DB_PWD,
            database: process.env.DB_NAME,
            port: 3306
        });

        connection.connect();
        connection.query('SELECT * FROM workshops_ratings', function (error, results, fields) {
            
            response.send(results)
            connection.end();
        });
    }

    return {
        getWorkshopList,
        getWorkshopDetails,
        rateWorkshop,
        getWorkshopResults
    }
}


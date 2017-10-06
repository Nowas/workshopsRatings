'use strict'


var template = require('../templates/workshopList')
var templateDetails = require('../templates/workshopSite')
var pug = require('pug')
var sqlite3 = require('sqlite3').verbose();


module.exports = function (config) {

    function getWorkshopList(request, response) {
        var workshopList = []

        for(var propertyName in config.workshops) {
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

    function rateWorkshop(request, response){
        var db = new sqlite3.Database('results.db');
        db.run("INSERT into workshops_ratings (symbol, ratings, ts) VALUES ('"+
            request.params.workshopSymbol+"',"+
            request.params.workshopRatings+",'"+
            new Date().toISOString()+
        "')");
        
        var html = pug.render(templateDetails, {
            'workshopsSymbol': request.params.workshopSymbol,
            'workshopsName': config.workshops[request.params.workshopSymbol],
            'info':'Thx'
        })
        response.send(html)
    }

    function  getWorkshopDetails(request, response){
        var html = pug.render(templateDetails, {
            'workshopsSymbol': request.params.workshopSymbol,
            'workshopsName': config.workshops[request.params.workshopSymbol],
            'info':'Thx'
        })
        response.send(html)
    }

    function  getWorkshopResults(request, response){
        var db = new sqlite3.Database('results.db');
        db.all("SELECT * FROM workshops_ratings",function(err,rows){
            response.send(rows)
        });

    }
    
    return {
        getWorkshopList,
        getWorkshopDetails,
        rateWorkshop,
        getWorkshopResults
    }
}


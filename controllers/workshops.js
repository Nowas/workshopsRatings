'use strict'


var template = require('../templates/workshopList')
var templateDetails = require('../templates/workshopSite')
var pug = require('pug')


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
        var sqlite3 = require('sqlite3').verbose();
        var db = new sqlite3.Database('results.db');
        db.run("INSERT into workshops_ratings (symbol, ratings) VALUES ('"+request.params.workshopSymbol+"',"+request.params.workshopRatings+")");
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

    
    return {
        getWorkshopList,
        getWorkshopDetails,
        rateWorkshop
    }
}


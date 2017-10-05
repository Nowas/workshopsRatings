'use strict'


module.exports = function(config){
    var router = require('express').Router()
    var workshops = require('./controllers/workshops')(config)

    router.get('/', workshops.getWorkshopList)
    router.get('/workshops/:workshopSymbol', workshops.getWorkshopDetails)
    router.get('/workshops/:workshopSymbol/:workshopRatings', workshops.rateWorkshop)
    
    return router
}

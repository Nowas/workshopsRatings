'use strict'

module.exports = `
doctype html
html(lang="en")
  head
    title= "workshopSite"
    style(type="text/css").
     .left {
       text-align: left;
     }
       body {
        background-color: white;
        color: black;
      }
  body
    h1 #{workshopsSymbol} - #{workshopsName}
    span(class='')
     h2= 'How do you rate this event?'
     ul
        li 
          a(href ='/workshops/' + workshopsSymbol + '/1') Below expectation          
        li 
          a(href ='/workshops/' + workshopsSymbol + '/2') As expected          
        li 
          a(href ='/workshops/' + workshopsSymbol + '/3') Above expectation          
     `

'use strict'

module.exports = `
doctype html
html(lang="en")
  head
    title= "workshopList"
    style(type="text/css").
     .wide {
       width: 30%;
     }
     .fullWidth {
       width: 100%;
     }
      table, th, td {
        border: 1px solid black;
        border-collapse: collapse;
        padding: 3px;
        margin: 2px;
        text-align: right;
        width:100%;
     }
       body {
        background-color: white;
        font-family: monoscape;
        color: black;
      }
  body
    h1 Koderek.edu.pl
    span(class='')
     h2= 'Lista warsztatów'
    table 
      tr
        th(class='wide') Symbol
        th(class='fullWidth') Nazwa
      each workshop in workshops
        tr
          td(class='wide') 
            a(href ='workshops/' +workshop.symbol)= workshop.symbol
          td(class='fullWidth')
            a(href ='workshops/' + workshop.symbol)= workshop.name
          
`

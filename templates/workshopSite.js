'use strict'

module.exports = `
doctype html
html(lang="en")
  head
    title= "workshopSite"
    link(rel='stylesheet', href='/site.css', type='text/css')
    script(src="https://code.jquery.com/jquery-1.12.4.min.js" integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ=" crossorigin="anonymous")
    script.
      $(document).ready(function() {
        var ratings = 0
        $('.plus').click(function(event) {
          ratings = 3
        })
        $('.zero').click(function(event) {
          ratings = 2
        })
        $('.minus').click(function(event) {
          ratings = 1
        })
        $('#send').click(function(event) {
          $.get("/workshops/#{workshopsSymbol}/" + ratings, function(data, status) {})
          ratings = 0
        })
      })

    body
    h1(style='width:100%') #{workshopsSymbol}

    h2(style='width:100%') #{workshopsName} 
    
    a(class='button minus' href='#minus')
      span(class='bg bg-red' id='minus')
      span(class='symbol')
    a(class='button zero' href='#zero')
      span(class='bg bg-yellow' id='zero')
      span(class='symbol')
    a(class='button plus' href='#plus')
      span(class='bg bg-green' id='plus')
      span(class='symbol')
    span(class='cancel')
      a(id='send' href='#') 
        | Wyślij
`

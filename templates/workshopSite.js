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
    
    a(class='button minus smiley-red' href='#minus')
      span(class='bg bg-red' id='minus')
      div(class='left-eye')
      div(class='right-eye')
      div(class='smile')
    a(class='button zero smiley-yellow' href='#zero')
      span(class='bg bg-yellow' id='zero')
      div(class='left-eye')
      div(class='right-eye')
      div(class='smile')
    a(class='button plus smiley-green' href='#plus')
      span(class='bg bg-green' id='plus')
      div(class='left-eye')
      div(class='right-eye')
      div(class='smile')
    span(class='cancel')
      a(id='send' href='#') 
        | Wyślij

        <div class='left-eye'></div>
        <div class='right-eye'></div>
        <div class='smile'></div>
`

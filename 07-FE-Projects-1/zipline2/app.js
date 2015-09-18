//
//  Free Code Camp
//  7. Front End Development Projects (Basic)
//
//  Created by Dulio Denis on 9/18/15.
//  Copyright (c) 2015 ddApps. All rights reserved.
//  ------------------------------------------------
//  Zipline: Build a Random Quote Machine
//  http://www.freecodecamp.com/challenges/zipline-build-a-random-quote-machine
//
$( document ).ready(function() {
	generate();

    function generate(){
        var quotes = ["Failure will never overtake me if my determination to succeed is strong enough.", 
                      "What you do today can improve all your tomorrows.", 
                      "In order to succeed, we must first believe that we can.",
                      "Aim for the moon. If you miss, you may hit a star.",
                      "Always do your best. What you plant now, you will harvest later.",
                      "A creative man is motivated by the desire to achieve, not by the desire to beat others.",
                      "You are never too old to set another goal or to dream a new dream.",
                      "Don't watch the clock; do what it does. Keep going.",
                      "It does not matter how slowly you go as long as you do not stop."];

        randomQuote = quotes[Math.floor(Math.random()*quotes.length)];
        
        $('.saying').text(randomQuote);
    }
      
    $(".button").on( "click", function() {
        generate();
    });
    
});
 
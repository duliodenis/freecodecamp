//
//  Free Code Camp
//  5. Algorithms 1 (Basic)
//
//  Created by Dulio Denis on 9/10/15.
//  Copyright (c) 2015 ddApps. All rights reserved.
//  ------------------------------------------------
//  Bonfire: Confirm the Ending
//  http://www.freecodecamp.com/challenges/bonfire-confirm-the-ending
//
// "Never give up and good luck will find you."
// -- Falcor


// Utility function to check for white space in a string
function hasWhiteSpace(string) {
  return string.indexOf(' ') >= 0;
}


// Check if a string (first argument) ends with the given target string (second argument)
function end(string, target) {
    if (hasWhiteSpace(string)) {  
        var words = string.split(" ");
        var lastWord = words[words.length - 1];
        if (lastWord === target) return true;
        return false;
    } else {
        var lastChar = string[string.length-1];
        if (lastChar === target) return true;
        return false;
    }
}


// Test Cases: one character in a word, one string in a sentence
var end1 = end('Bastian', 'n');
if (end1) console.log("end 1 does end in n");
else console.log("end1 does NOT end in n");

var end2 = end('He has to give me a new name', 'name');
if (end2) console.log("end 2 does end in name");
else console.log("end 2 does NOT end in name");
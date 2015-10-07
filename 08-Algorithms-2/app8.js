//
//  Free Code Camp
//  8. Algorithms 2 (Intermediate)
//
//  Created by Dulio Denis on 10/7/15.
//  Copyright (c) 2015 ddApps. All rights reserved.
//  ------------------------------------------------
//  Bonfire 8: Missing Letters
//  http://www.freecodecamp.com/challenges/bonfire-missing-letters
//
//  Find the missing letter in the passed letter range and return it. 


var fearNotLetter = function(str) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    
    // determine where to start and end in the argument's range
    var i = alphabet.indexOf(str[0]);
    var j = alphabet.indexOf(str[str.length-1]);
    
    for (; i < j; i++) {
        if (str.indexOf(alphabet[i]) == -1) return alphabet[i];
    }
    return; // return undefined if no missing letter
}

// Test Cases
var lettersMissing1 = fearNotLetter("abce");
console.log("d = " +lettersMissing1);

var lettersMissing2 = fearNotLetter("bcd"); 
console.log("undefined = " +lettersMissing2);
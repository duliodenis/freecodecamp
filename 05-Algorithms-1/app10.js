//
//  Free Code Camp
//  5. Algorithms 1 (Basic)
//
//  Created by Dulio Denis on 9/10/15.
//  Copyright (c) 2015 ddApps. All rights reserved.
//  ------------------------------------------------
//  Bonfire: Truncate a string
//  http://www.freecodecamp.com/challenges/bonfire-truncate-a-string
//
//  Clear out that junk in your trunk


// Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
// string length must be greater than the requested number otherwise returns the original string

function truncate(string, number) {
    if (number < string.length) {
        var truncatedString = string.slice(0, number);
        var ellipsisStart = truncatedString.length-3;
        return truncatedString.substr(0,ellipsisStart) + "...";
    } else {
        return string;
    }
}


// Test Cases

// A-tisket...
var truncated1 = truncate('A-tisket a-tasket A green and yellow basket', 11);
console.log("truncated string 1 is: " + truncated1)


// Peter Piper...
var truncated2 = truncate('Peter Piper picked a peck of pickled peppers', 14);
console.log("truncated string 2 is: " + truncated2);


// should not truncate if string is = length
var truncated3 = truncate('A-tisket a-tasket A green and yellow basket', 'A-tisket a-tasket A green and yellow basket'.length);
console.log("truncated string 3 is: " + truncated3);

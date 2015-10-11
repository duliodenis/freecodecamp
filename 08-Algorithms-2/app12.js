//
//  Free Code Camp
//  8. Algorithms 2 (Intermediate)
//
//  Created by Dulio Denis on 10/11/15.
//  Copyright (c) 2015 ddApps. All rights reserved.
//  ------------------------------------------------
//  Bonfire 12: Spinal Tap Case
//  http://freecodecamp.com/challenges/bonfire-spinal-tap-case
//
//  Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
//  "It's such a fine line between stupid, and clever."
//  --David St. Hubbins

var camelCaseConvert = function(str) {
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (var i=0; i < str.length; i++) {
        if (uppercase.indexOf(str[i]) > -1) {
            var newSubString = "-".concat(str[i].toLowerCase());
            str = str.replace(str[i], newSubString);
        }
    }
    
    if (str[0] == "-") str = str.slice(1); // if first character is a hyphen - remove it
    return str;
}

var spinalCase = function(str) {
    str = camelCaseConvert(str);    // camelCase conversion
    str = str.replace(/ /g, "-");   // space elimination
    str = str.replace(/_/g, "-");   // underscore conversion
    str = str.replace(/--/g, "-");  // double hyphen conversion
    return str;
}


// Test Cases

// Base test
var spinalCase1 = spinalCase('This Is Spinal Tap');
console.log("this-is-spinal-tap = " + spinalCase1);

// Camel Case Support
var spinalCase2 = spinalCase("thisIsSpinalTap");
console.log("this-is-spinal-tap = " + spinalCase2);

// Underscores
var spinalCase3 = spinalCase("The_Andy_Griffith_Show");
console.log("the-andy-griffith-show = " + spinalCase3);

// hyphen ignored
var spinalCase4 = spinalCase("Teletubbies say Eh-oh");
console.log("teletubbies-say-eh-oh = " + spinalCase4);
//
//  Free Code Camp
//  5. Algorithms 1 (Basic)
//
//  Created by Dulio Denis on 9/10/15.
//  Copyright (c) 2015 ddApps. All rights reserved.
//  ------------------------------------------------
//  Bonfire: Repeat a string repeat a string
//  http://www.freecodecamp.com/challenges/bonfire-repeat-a-string-repeat-a-string
//
//  repeat after me


function repeat(string, numberOfTimes) {
    var repeatedStringArray = [];
    for (var times = 0; times < numberOfTimes; times++) {
        repeatedStringArray.push(string);
    }
    return repeatedStringArray.join("");
}


// Test Cases
var repeater1 = repeat('*', 3);
console.log("Repeat * three times = " +repeater1);

var repeater2 = repeat('abc', 3);
console.log("Repeat abc three times = " +repeater2);
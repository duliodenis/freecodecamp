//
//  Free Code Camp
//  8. Algorithms 2 (Intermediate)
//
//  Created by Dulio Denis on 10/8/15.
//  Copyright (c) 2015 ddApps. All rights reserved.
//  ------------------------------------------------
//  Bonfire 9: Boo Who
//  http://www.freecodecamp.com/challenges/bonfire-boo-who
//
//  Check if a value is classified as a boolean primitive. 
//  What is the new fad diet for ghost developers? The Boolean.

var boo = function(bool) {
    if (typeof(bool) === typeof(Boolean(true))) return true;
    else return false;
}

// Test Cases
var booWho1 = boo(true);
console.log("true = " + booWho1);

var booWho2 = boo(null);
console.log("null = " + booWho2);

var booWho3 = boo([1,2,3]);
console.log("array = " + booWho3);
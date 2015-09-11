//
//  Free Code Camp
//  5. Algorithms 1 (Basic)
//
//  Created by Dulio Denis on 9/11/15.
//  Copyright (c) 2015 ddApps. All rights reserved.
//  ------------------------------------------------
//  Bonfire: Slasher Flick
//  http://www.freecodecamp.com/challenges/bonfire-slasher-flick
//
//  It doesn't always pay to be first


//  Returns the remaining elements of an array after chopping off n elements from the head.

function slasher(array, howMany) {
    if (howMany > array.length) return [];
    return array.slice(howMany);
}


// Test Cases

// Test 1: ([1, 2, 3], 2) -> [3]
var test1 = slasher([1, 2, 3], 2);
console.log("[3] = " + test1);

// Test 2: ([1, 2, 3], 0) -> [1, 2, 3]
var test2 = slasher([1, 2, 3], 0);
console.log("[1, 2, 3] = " + test2);

// Test 3: ([1, 2, 3], 9) -> []
var test3 = slasher([1, 2, 3], 9);
console.log("[] = " + test3);
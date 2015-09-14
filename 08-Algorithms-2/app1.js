//
//  Free Code Camp
//  8. Algorithms 2 (Intermediate)
//
//  Created by Dulio Denis on 9/14/15.
//  Copyright (c) 2015 ddApps. All rights reserved.
//  ------------------------------------------------
//  Bonfire: Sum All Numbers in a Range
//  http://freecodecamp.com/challenges/bonfire-sum-all-numbers-in-a-range
//


// Utility function to create an array with a range from start to end

function range(start, end) {
    var array = [];
    for (var i = start; i <= end; i++) {
        array.push(i);
    }
    return array;
}


// Returns the sum of two numbers and all numbers between them.

function sumAll(array) {
    var sum = 0;
    var smaller = Math.min(array[0], array[1]);
    var larger  = Math.max(array[0], array[1]);
    
    var sum = range(smaller, larger).reduce(
        function(previous, current){ 
            return previous + current;
        });
    
    return sum;
}


// Test Cases

// Simple Case
var sumAllTest1 = sumAll([1,4]);
console.log("[1, 4] = 10 = " + sumAllTest1);

// Unsorted Case
var sumAllTest2 = sumAll([4, 1]);
console.log("[4, 1] = 10 = " + sumAllTest2);

// Broken Sort
var sumAllTest3 = sumAll([5, 10]);
console.log("[5, 10] = 45 = " + sumAllTest3);
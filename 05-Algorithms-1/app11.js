//
//  Free Code Camp
//  5. Algorithms 1 (Basic)
//
//  Created by Dulio Denis on 9/11/15.
//  Copyright (c) 2015 ddApps. All rights reserved.
//  ------------------------------------------------
//  Bonfire: Chunky Monkey
//  http://www.freecodecamp.com/challenges/bonfire-chunky-monkey
//
//  Break it up.


//  Splits an array (first argument) into groups the length of size (second argument)
//  Returns them as a multidimensional array.

function chunk(array, size) {
    var returnArray = [];    // return array of arrays
    var chunkStart = 0;      // counter to keep track of chunk starts as we slice
    
    for (var i = 0; i < array.length+1; i++) {
        // determine whether we have a valid chunk size by using modulus on size param
        var modulus = i % size;
        
        // if we have a chunk then push into result array
        if ( (modulus == 0) && (i != 0) ) {
            returnArray.push(array.slice(chunkStart,i));
            chunkStart = i;
        }
        
        // if there is a remainder that is smaller than a chunk push it and break
        if ( (modulus > 0) && (array.length - chunkStart < size) ) {
            console.log("Need to take care of a remainder");   
            returnArray.push(array.slice(chunkStart,array.length + 1));
            break;
        }   
    }
    
    return returnArray;
}

// Test Cases

// Test 1: [[a,b], [c,d]]
var test1 = chunk(['a', 'b', 'c', 'd'], 2);
console.log("[[a,b], [c,d]] = " + test1);


// Test 2: [[0,1,2], [3,4,5]]
var test2 = chunk([0, 1, 2, 3, 4, 5], 3);
console.log("[[0,1,2], [3,4,5]] = " + test2);


// Test 3: [[0,1], [2,3], [4,5]]
var test3 = chunk([0, 1, 2, 3, 4, 5], 2);
console.log(" [[0,1], [2,3], [4,5]] = " + test3);


// Test 4: [ [ 0, 1, 2, 3 ], [ 4, 5 ] ]
var test4 = chunk([0, 1, 2, 3, 4, 5], 4);
console.log("[ [ 0, 1, 2, 3 ], [ 4, 5 ] ] = " + test4);
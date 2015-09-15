//
//  Free Code Camp
//  8. Algorithms 2 (Intermediate)
//
//  Created by Dulio Denis on 9/15/15.
//  Copyright (c) 2015 ddApps. All rights reserved.
//  ------------------------------------------------
//  Bonfire: Diff Two Arrays
//  http://freecodecamp.com/challenges/bonfire-diff-two-arrays
//
//  Same, same; but different.


// Compares two arrays and returns a new array with any items not found in either of the original arrays.

function diff(array1, array2) {
    var returnArray = [];
    
    for (var i = 0; i < array1.length; i++) {
            if (array2.indexOf(array1[i]) == -1) {
                returnArray.push(array1[i]);
            }
    }
    
    for (var i = 0; i < array2.length; i++) {
            if (array1.indexOf(array2[i]) == -1) {
                returnArray.push(array2[i]);
            }
    }
    

    return returnArray;
}


// Test Cases

// Numbers Case
var diffTest1 = diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
console.log("[4] = " + diffTest1);

// String Case
var diffTest2 = diff(['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'], ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']);
console.log("['pink wool'] = " + diffTest2);

// Empty Array Case
var diffTest3 = diff([], ['snuffleupagus', 'cookie monster', 'elmo']);
console.log("['snuffleupagus', 'cookie monster', 'elmo'] = " + diffTest3);
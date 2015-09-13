//
//  Free Code Camp
//  5. Algorithms 1 (Basic)
//
//  Created by Dulio Denis on 9/12/15.
//  Copyright (c) 2015 ddApps. All rights reserved.
//  ------------------------------------------------
//  Bonfire: Seek and Destroy
//  http://freecodecamp.com/challenges/bonfire-seek-and-destroy
//
//  Remove all the values.


// Utility function - makes an array to check from a passed array
function makeArrayToCheck(array) {
    var returnArray = [];
    for (var i = 1; i < array.length; i++ ) {
        returnArray.push(array[i]);       
    }
    return returnArray;
}


// Utility function to see if there exists a value in an array
function thereExists(array, value) {
    if (array.indexOf(value) > -1) return true;
    return false;
}


// Removes all elements from the initial array that are
// of the same value as the arguments.

function destroyer() {
    var array = arguments[0];
    var itemsToRemove = makeArrayToCheck(arguments);

    // iterate over items to remove - removing them
    for (var i = 0; i < itemsToRemove.length; i++) {
        while (thereExists(array, itemsToRemove[i])) {
            array.splice(array.indexOf(itemsToRemove[i]), 1);
        }    
    }
    return array;
}


// Test Cases

var destroyTestCase1 = destroyer([1, 2, 3, 1, 2, 3], 2, 3);
console.log(" [ 1, 1 ] = " + destroyTestCase1);

var destroyTestCase2 = destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);
console.log(" [1, 5, 1] = " + destroyTestCase2);
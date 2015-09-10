//
//  Free Code Camp
//  5. Algorithms 1 (Basic)
//
//  Created by Dulio Denis on 9/9/15.
//  Copyright (c) 2015 ddApps. All rights reserved.
//  ------------------------------------------------
//  Bonfire: Return Largest Numbers in Arrays
//  http://freecodecamp.com/challenges/bonfire-return-largest-numbers-in-arrays
//

function largestInArray(array) {
    var largest = 0;                                // Set a comparison value
    for (var item in array) {                       // iterate through subArray
        var current = array[item];                  // take the current item
        if (current > largest) largest = current;   // and compare to see if the largest
    }
    return largest;                                 // return the largest
}


function largestOfFour(array) {
    var largest = 0;                                // Set a comparison value
    var newArray = [];                              // Set a variable for the new array to return

    for (var item in array) {                       // iterate through the sub arrays
        newArray.push(largestInArray(array[item]));
  }
  return newArray;                                  // return newArray
}


// Test Cases

var largestOfFour1 = largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
console.log("Largest of four 1 = " + largestOfFour1);

var largestOfFour2 = largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
console.log("Largest of four 2 = " + largestOfFour2);

var largestOfFour3 = largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]);
console.log("Largest of four 3 = " + largestOfFour3);
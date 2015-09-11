//
//  Free Code Camp
//  5. Algorithms 1 (Basic)
//
//  Created by Dulio Denis on 9/11/15.
//  Copyright (c) 2015 ddApps. All rights reserved.
//  ------------------------------------------------
//  Bonfire: Mutations
//  http://www.freecodecamp.com/challenges/bonfire-mutations
//


//  Return true if the string in the first element of the array contains 
//  all of the letters of the string in the second element of the array.

function mutation(array) {
    // seperate the elements - ignore case
    element1 = array[0].toLowerCase();
    element2 = array[1].toLowerCase();
    
    // iterate through every element of element2 ensuring each character is in element1
    for (var item in element2) {
        if (element1.indexOf(element2[item]) === -1) return false;
    }
    
    return true;
}


// Test Cases
var test1 = mutation(['hello', 'hey']);
console.log("false = " + test1);

var test2 = mutation(['Mary', 'Army']);
console.log("true = " + test2);

var test3 = mutation(['Alien', 'line']);
console.log("true = " + test3);
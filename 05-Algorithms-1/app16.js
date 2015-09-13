//
//  Free Code Camp
//  5. Algorithms 1 (Basic)
//
//  Created by Dulio Denis on 9/13/15.
//  Copyright (c) 2015 ddApps. All rights reserved.
//  ------------------------------------------------
//  Bonfire: Where do I belong
//  http://freecodecamp.com/challenges/bonfire-where-do-i-belong
//
//  Find my place in this sorted array.


// Return the lowest index at which a value (second argument) 
// should be inserted into a sorted array (first argument).

    function where(array, number) {
        for (var i = 0; i < array.length; i++) {
            if (array[i] >= number) return i;   
        }
        return array.length;
    }


// Test Cases

// Greater Than Test
var whereTest1 = where([40, 60], 50);
console.log("1 = " + whereTest1);

// Equal Test
var whereTest2 = where([10, 20, 30, 40, 50], 30);
console.log("2 = " + whereTest2);

// Out of Range Test
var whereTest3 = where([2, 5, 10], 15);
console.log("3 = " + whereTest3);
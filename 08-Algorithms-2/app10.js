//
//  Free Code Camp
//  8. Algorithms 2 (Intermediate)
//
//  Created by Dulio Denis on 10/9/15.
//  Copyright (c) 2015 ddApps. All rights reserved.
//  ------------------------------------------------
//  Bonfire 10: Sorted Union
//  http://www.freecodecamp.com/challenges/bonfire-sorted-union
//
//  Write a function that takes two or more arrays and returns a new array 
//  of unique values in the order of the original provided arrays. 


var unite = function(arr1, arr2, arr3) {
    var arrayResult = arr1;
    
    for (var i=0; i < arguments.length; i++) {
        for (var j=0; j < arguments[i].length; j++) {
             if (arrayResult.indexOf(arguments[i][j]) == -1) arrayResult.push(arguments[i][j]);
        }
    }    
    
    return arrayResult;
}


// Test Cases
var united1 = unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);
console.log(" [1, 3, 2, 5, 4] = " +united1);

var united2 = unite([1, 2, 3], [5, 2, 1]);
console.log(" [1, 2, 3, 5] = " + united2);

var united3 = unite([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);
console.log(" [1, 2, 3, 5, 4, 6, 7, 8] = " + united3);
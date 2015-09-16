//
//  Free Code Camp
//  8. Algorithms 2 (Intermediate)
//
//  Created by Dulio Denis on 9/16/15.
//  Copyright (c) 2015 ddApps. All rights reserved.
//  ------------------------------------------------
//  Bonfire: Where art thou
//  http://freecodecamp.com/challenges/bonfire-where-art-thou
//
//  What's in a name?


//  where: a function that looks through an array of objects (first argument) 
//  and returns an array of all objects that have matching property and value
//  pairs (second argument).

function where(collection, source) {
    var returnArray = [];
    
    console.log("------------------------------");
    console.log("source length = " + source.length);
    
    for (var s = 0; s < source.length; s++) {
        
        // get the source's keys and values
        for (var si = 0 ; si < source.length; si++) {
        
            var sourceKeys = Object.keys(source[si]);
            console.log("sourceKeys.length = " +sourceKeys.length);

            // get the collections keys and values
            for (var i in collection) {
                var row = collection[i];
                console.log(row); 

                var keys = Object.keys(row);
                for (var column = 0; column < keys.length; column++) {
                    var coll
                    console.log("key = "   + keys[column]);
                    console.log("value = " + row[keys[column]]);
                    
                }   
            }
    
        }
        
    }
    
    return returnArray;
}


// -------------------------------------------------------
// Test Cases

// 1. Single Source Key with Single Collection Match Case

var whereTest1 = where([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }], [{ last: 'Capulet' }]);
console.log("[{ first: 'Tybalt', last: 'Capulet' }] = " + whereTest1);

// 2. Single Source Key with Multiple Collection Matches Case

var whereTest2 = where([{ 'a': 1 }, { 'a': 1 }, { 'a': 1, 'b': 2 }], [{ 'a': 1 }]);
console.log("[{ 'a': 1 }, { 'a': 1 }, { 'a': 1, 'b': 2 }] = " + whereTest2);

// 3. Dual Source Key Match Case

var whereTest3 = where([{ 'a': 5 }, { 'a': 5 }, { 'a': 5, 'b': 10 }], [{ 'a': 5, 'b': 10 }]);
console.log("[{ 'a': 5, 'b': 10 }] = " +whereTest3);

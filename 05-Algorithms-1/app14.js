//
//  Free Code Camp
//  5. Algorithms 1 (Basic)
//
//  Created by Dulio Denis on 9/12/15.
//  Copyright (c) 2015 ddApps. All rights reserved.
//  ------------------------------------------------
//  Bonfire: Falsy Bouncer
//  http://freecodecamp.com/challenges/bonfire-falsy-bouncer
//
//  Don't show a false ID to this bouncer.


//  Remove all falsy values from an array. 

function bouncer(array) {
    return array.filter(Boolean);
}


// Test cases

// Some
var bounceTest1 = bouncer([7, 'ate', '', false, 9]);
console.log("[ 7, 'ate', 9 ] = " + bounceTest1);

// None
var bounceTest2 = bouncer(['a', 'b', 'c']);
console.log("['a', 'b', 'c'] = " + bounceTest2);

// All
var bounceTest3 = bouncer([false, null, 0, NaN, undefined, '']);
console.log("[] = " + bounceTest3);
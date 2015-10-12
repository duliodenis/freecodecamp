//
//  Free Code Camp
//  8. Algorithms 2 (Intermediate)
//
//  Created by Dulio Denis on 10/12/15.
//  Copyright (c) 2015 ddApps. All rights reserved.
//  ------------------------------------------------
//  Bonfire 13: Sum All Odd Fibonacci Numbers
//  http://freecodecamp.com/challenges/bonfire-sum-all-odd-fibonacci-numbers
//


//returns true if passed argument is Odd otherwise its Even and return false
var isOdd = function(num) {
    if (num % 2 == 0) return false;
    else return true;
}


// finds the nth Fibonacci (ex: findFib(4) = 3, findFib(7) = 13
// sequence = 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
var findFib = function(num) {
    var a = 0, b = 1, f = 1;
    for(var i = 2; i <= num; i++) {
        f = a + b;
        a = b;
        b = f;
    }
    return f;
}


// Sum All Odd Fibonacci Numbers until passed argument num
// Worksonsmall values of num
var sumFibs2 = function(num) {
    var sum = 0, f = 0;
    for(var i = 1; i <= num; i++) {
        f = findFib(i);
        if (isOdd(f)) sum = sum + f;
    }   
    return sum;
}


var sumFibs= function(num) {
    var sum = 1, a = 0, b = 1, f = 1;
    for(var i = 2; i <= num; i++) {
        f = a + b; 
        if (f > num) return sum;
        if (isOdd(f)) sum += f;
        a = b;
        b = f;
    }
    return sum;
}


// Test Cases

// Test isOdd 
console.log("4 is odd " + isOdd(4));
console.log("5 is odd " + isOdd(5));

// Test Fibonacci Sequence Generator
console.log("findFib(7) = 8 = " + findFib(7));

var sum1 = sumFibs(4); // 1, 1, (2), 3 -> 1+1+3 = 5
console.log("5 = " + sum1);

var sum2 = sumFibs(1000);
console.log("1785 = " + sum2);

var sum3 = sumFibs(4000000);   // 4613732
var sum4 = sumFibs(75024);     // 60696
var sum5 = sumFibs(75025);     // 135721

console.log("4613732 = "    + sum3);
console.log("60696 = "      + sum4);
console.log("135721 = "     + sum5);
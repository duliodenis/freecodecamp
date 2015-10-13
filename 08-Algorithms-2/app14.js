//
//  Free Code Camp
//  8. Algorithms 2 (Intermediate)
//
//  Created by Dulio Denis on 10/13/15.
//  Copyright (c) 2015 ddApps. All rights reserved.
//  ------------------------------------------------
//  Bonfire 14: Sum All Primes
//  http://www.freecodecamp.com/challenges/bonfire-sum-all-primes
//


// Returns true if the num argument is prime otherwise false
var isPrime = function(num) {
    for (var i = 2; i < num; i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return true;
}


// Return an Array of Primes from 2 to num (if num is prime)
var arrayofPrimes = function(num) {
    var returnArray = [];
    // Start at 2 since 0 and 1 are not prime
    for (var i = 2; i <= num; i++) {
        if (isPrime(i)) returnArray.push(i);
    }
    return returnArray;
}


// Sums the primes up to and including the provided number
function sumPrimes(num) {
    var sum = 0;
    var array = arrayofPrimes(num);
    for (var i =0; i < array.length; i++) sum += array[i];
    return sum;
}


// Test Cases
var primeTestSum1 = sumPrimes(10);
console.log("sumPrimes(10) = 17 = " + primeTestSum1);

var primeTestSum2 = sumPrimes(977);
console.log("sumPrimes(977) = 73156 = " + primeTestSum2);

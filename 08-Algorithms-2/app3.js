//
//  Free Code Camp
//  8. Algorithms 2 (Intermediate)
//
//  Created by Dulio Denis on 9/15/15.
//  Copyright (c) 2015 ddApps. All rights reserved.
//  ------------------------------------------------
//  Bonfire: Roman Numeral Converter
//  http://freecodecamp.com/challenges/bonfire-roman-numeral-converter
//


//  Utility functions

function addTen(s) {
    return s + "X";
}

function addNine(s) {
    return s + "IX";   
}

function addFive(s) {
    return s + "V";
}

function addOne(s) {
    return s + "I";   
}


//  Converts the given number into a roman numeral.

function convert(number) {
    var roman = "";
    
    while (number > 0) {
        if (number-10>=0)      { number = number - 10; roman = addTen(roman);  }
        else if (number-9>=0)  { number = number - 9;  roman = addNine(roman); }
        else if (number-5>=0)  { number = number - 5;  roman = addFive(roman); }
        else if (number-1>=0)  { number = number - 1;  roman = addOne(roman);  }
    }
    return roman;   
}
        

// Test Cases

// Case 36: XXXVI
var num1 = convert(36);
console.log("36 = XXXVI = " + num1);

// Case 29: XXIX
var num2 = convert(29);
console.log("29 = XXIX = " + num2);

console.log(convert(12));
console.log(convert(5));
console.log(convert(9));
console.log(convert(16));
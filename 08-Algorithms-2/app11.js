//
//  Free Code Camp
//  8. Algorithms 2 (Intermediate)
//
//  Created by Dulio Denis on 10/10/15.
//  Copyright (c) 2015 ddApps. All rights reserved.
//  ------------------------------------------------
//  Bonfire 11: Convert HTML Entities
//  http://www.freecodecamp.com/challenges/bonfire-convert-html-entities
//
//  Convert the characters "&", "<", ">", '"' (double quote), and "'" (apostrophe), 
//  in a string to their corresponding HTML entities. 
//  &colon;&rpar;


var convert = function(str) {
     return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}


// Test Cases

// One ampersand
var convert1 = convert("Dolce & Gabbana");
console.log("Dolce &amp; Gabbana = " + convert1);

// Two ampersands
var convert2 = convert("Dolce & Gabbana & Fred");
console.log("Dolce &amp; Gabbana &amp; Fred = " + convert2);

// Three less thans
var convert3 = convert("Hamburgers < Pizza < Tacos");
console.log("Hamburgers &lt; Pizza &lt; Tacos = " + convert3);

// One apostrophe
var convert4 = convert("Shindler's List");
console.log("Shindler&apos;s List. = " + convert4);

// Nothing to convert
var convert5 = convert("abc");
console.log("abc = " + convert5);
//
//  Free Code Camp
//  8. Algorithms 2 (Intermediate)
//
//  Created by Dulio Denis on 9/29/15.
//  Copyright (c) 2015 ddApps. All rights reserved.
//  ------------------------------------------------
//  Bonfire: Search and Replace
//  http://freecodecamp.com/challenges/bonfire-search-and-replace
//
//  Perform a search and replace on the sentence using the arguments provided and return the new sentence.
//  First argument is the sentence to perform the search and replace on.
//  Second argument is the word that you will be replacing (before).
//  Third argument is what you will be replacing the second argument with (after).


// Utility function to check to see if old string is uppercased then uppercase second string
var uppercaseIfNeeded = function(oldStr, newStr) {
    if (oldStr[0] === oldStr[0].toUpperCase())     
        return newStr.charAt(0).toUpperCase().concat(newStr.substr(1, newStr.length));
    else return newStr;
}

// Search and Replace Function
var myReplace = function(string, oldWord, newWord) {    
    var returnString = "";
    wordCounter = 0;
    
    var location = string.indexOf(oldWord);
    
    returnString = string.substr(0, location);
    returnString = returnString.concat(uppercaseIfNeeded(oldWord, newWord));
    
    var i = location + oldWord.length; // figure out where to start the remainder
    returnString = returnString.concat(string.substr(i, string.length)); // copy over remainder
    return returnString;    
}


// Test Cases

// Simple replacement
var replaced = myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
console.log(replaced);

// Uppercase preservation test
var replaced2 = myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
console.log("He is Sitting on the couch = " + replaced2);
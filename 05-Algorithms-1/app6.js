//
//  Free Code Camp
//  5. Algorithms 1 (Basic)
//
//  Created by Dulio Denis on 9/9/15.
//  Copyright (c) 2015 ddApps. All rights reserved.
//  ------------------------------------------------
//  Bonfire: Title Case a Sentence
//  http://freecodecamp.com/challenges/bonfire-title-case-a-sentence
//

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}


function titleCase(string) {
    var strings=string.split(/\s+/);                // Split the string by white space
    var titleCaseStringArray = [];                  // Use an Array to hold each title cased word
    
    for (var wordIndex in strings) {                // Iterate through each word
        titleCaseStringArray.push(capitalizeFirstLetter(strings[wordIndex]));
    }
    
    return titleCaseStringArray.join(" ");          // return string form of array seperated with whitespace
}


// Test Cases
var titleCase1 = titleCase("I'm a little tea pot"); // Answer: I'm A Little Tea Pot
console.log("Title Case 1: " + titleCase1);

var titleCase2 = titleCase("sHoRt AnD sToUt");      // Answer: Short And Stout
console.log("Title Case 2: " + titleCase2);
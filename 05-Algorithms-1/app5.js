//
//  Free Code Camp
//  5. Algorithms 1 (Basic)
//
//  Created by Dulio Denis on 9/9/15.
//  Copyright (c) 2015 ddApps. All rights reserved.
//  ------------------------------------------------
//  Bonfire: Find the Longest Word in a String
//  http://freecodecamp.com/challenges/bonfire-find-the-longest-word-in-a-string
//

function findLongestWord(str) {
    var strings=str.split(/\s+/);                   // Split the string by white space
    var longestWordLength = 0;                      // Establish a longest word length counter
    
    for (var wordIndex in strings) {                // Iterate through each word
        wordLength = strings[wordIndex].length;     // Comparing their lengths
        if (wordLength > longestWordLength)         // if the new length is the longest
            longestWordLength = wordLength;         // set it as the longest
    }
    
    return longestWordLength;                       // return the longest word length
}

// Test Cases
var longestWord1 = findLongestWord('The quick brown fox jumped over the lazy dog'); // 6
console.log("Longest word 1 = " + longestWord1);

var longestWord2 = findLongestWord("What if we try a super-long word such as otorhinolaryngology"); //19
console.log("Longest word 2 = " + longestWord2);
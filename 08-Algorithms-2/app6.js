//
//  Free Code Camp
//  8. Algorithms 2 (Intermediate)
//
//  Created by Dulio Denis on 10/1/15.
//  Copyright (c) 2015 ddApps. All rights reserved.
//  ------------------------------------------------
//  Bonfire: Pig Latin
//  http://freecodecamp.com/challenges/bonfire-pig-latin
//
//  Translate the provided string to pig latin.


// Utility function to detect whether passed string starts with a vowel

var isVowel = function(str) {
    if (str[0] == "a" || str[0] == "e" || str[0] == "i" || str[0] == "o" || str[0] == "u") {
        return true;
    }
    return false;
}


// translate function takes string and translates into Pig Latin

var translate = function(str) {
    // if the string starts with a vowel - add way to the end
    if (isVowel(str)) {
        str = str.concat("way");
        return str;
    } else {
    // otherwise look for the consonant cluster to shift
        for (var i=0; i < str.length; i++) {
            if(isVowel(str[i])) {
                var prefix = str.slice(0, i);
                str = str.slice(i, str.length);
                str = str.concat(prefix);
                str = str.concat("ay");
                return str;
            }
        }
    }
}

// Test Cases

// move single consonant test
var latin1 = translate("california");
console.log("aliforniacay = " + latin1);

// move consonant cluster case
var latin2 = translate("glove");
console.log("oveglay = " + latin2);

// starts with a vowel case
var latin3 = translate("algorithm");
console.log("algorithmway = " + latin3);
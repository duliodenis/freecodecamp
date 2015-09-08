// Utility Functions: reverseString & cleanString

// Reverses a String (from Bonfire #1)
// see https://github.com/duliodenis/freecodecamp/blob/master/05-Algorithms-1/apps2.js
function reverseString(str) {
    var reversedStrArray = [];
    var i = str.length - 1;

    while (i > -1) {  
        reversedStrArray.push(str.charAt(i));
        i--;
    }
    return reversedStrArray.join("");
}


// Cleans a string by making all lower case and removing all punctuations
function cleanString(str) {
    var cleanStr = str.toLowerCase();                                   // makes it all lower case
    cleanStr = cleanStr.replace(/\s+/g, "");                            // removes all whitespace
    cleanStr = cleanStr.replace(/[.,-\/#!$%\^&\*;:{}=\-_`~()'?!]/g,""); // removes all punctuations
    return cleanStr;
}


// Return true if the given string is a palindrome. Otherwise, return false.
function palindrome(str) {
    var cleanStr = cleanString(str);                    // cleans string
    var reversedCleanStr = reverseString(cleanStr);     // makes a reversed version
    if (reversedCleanStr === cleanStr) return true;     // compares original to reversed 
    else return false;                                  // if it doesn't match its not a palindrome
}


// --------------------------------------------------------------
// Test Cases
var isPalindrome1 = palindrome("eye");
if (isPalindrome1) console.log("eye is a palindome");
else console.log("eye is NOT  palindome");

var isPalindrome2 = palindrome("race car");
if (isPalindrome2) console.log("race car is a palindome");
else console.log("race car is NOT a palindome");

var isPalindrome3 = palindrome("A man, a plan, a canal. Panama");
if (isPalindrome3) console.log("A man, a plan, a canal. Panama is a palindrom.");
else console.log("A man, a plan, a canal. Panama is NOT a palindome.");

var isPalindrome4 = palindrome("I'm 23 non 32 m'I?");
if (isPalindrome4) console.log("I'm 23 non 32 m'I? is a palindome.");
else console.log("I'm 23 non 32 m'I? is NOT a palindrome.");

var isPalindrome5 = palindrome("1 eye for of 1 eye.");
if (isPalindrome5) console.log("1 eye for of 1 eye. is a palindrome.");
else console.log("1 eye for of 1 eye. is NOT a palindrome.");

var isPalindrome6 = palindrome("not a palindrome");
if (isPalindrome6) console.log("not a palindrome is a pailindrome.");
else console.log("not a palindrome is NOT a palindrome.");

function reverseString(str) {
  var reversedStrArray = [];
  
  // set reverse counter to string length (minus 1 due to zero-based)
  var i = str.length - 1;

  // traverse backwards in the string while copying to new array
  // stop when we are less than zero - go while positive - zero included
  while (i > -1) {  
    reversedStrArray.push(str.charAt(i));
    i--;
  }
  
  // return string version of reversed string array
  return reversedStrArray.join("");
}


// Test Cases
var reversedString = reverseString('hello');
console.log("The reversed string hello is " + reversedString);
var reversedString2 = reverseString('Howdy');
console.log("The second reversed string Howdy is " + reversedString2);
var reversedString3 = reverseString('Greetings from Earth');
console.log("The third reversed string Greetings from Earth is " + reversedString3);

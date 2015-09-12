function factorialize(num) {
    // recursively call factorialize
    // base case of 1 means return 1
    if (num == 1) return 1;
    // otherwise return n * (n-1)
    else return num * factorialize(num-1);
}

// Test Case
var factorial1 = factorialize(5);
console.log("5!=120. We say: " +factorial1);

var factorial2 = factorialize(10);
console.log("10!=3628800. We say: " +factorial2);

var factorial3 = factorialize(20);
console.log("20!=2432902008176640000. We say: " +factorial3);

if (factorial1 === 120) console.log("Match 5!");
if (factorial2 === 3628800) console.log("Match 10!");
if (factorial3 === 2432902008176640000) console.log("Match 20!");


//Eric Gu's implementation

function factorialize(num) {
  //creating an empty array    
  if(num === 0){
    return 1;
  }
  else{
  var array = [];
  //countdown
  for(var i = num; i > 0; i--){
      array.push(i);
  }
  var factorial = array.reduce(function(previousVal, currentVal){
  return previousVal*currentVal;
  });
    
  return factorial;
  } 
}

factorialize(10);

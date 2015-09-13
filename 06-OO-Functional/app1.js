//
//  Free Code Camp
//  6. Object Oriented and Functional Programming
//
//  Created by Dulio Denis on 9/13/15.
//  Copyright (c) 2015 ddApps. All rights reserved.
//  ------------------------------------------------
//  Waypoints: 12


//  Waypoint 1: Declare JavaScript Objects as Variables
//  http://freecodecamp.com/challenges/waypoint-declare-javascript-objects-as-variables
//
// Here is a sample Object
var car = {
  "wheels":4,
  "engines":1,
  "seats":5
};

// Now Let's make a similar Object called motorBike
// Give it two wheels, one engine and one seat
var motorBike = {
    wheels: 2,
    engines: 1,
    seats: 1
};


//  Waypoint 2: Construct JavaScript Objects with Functions
//  http://freecodecamp.com/challenges/waypoint-construct-javascript-objects-with-functions

// Give your myMotorBike object a wheels, engines and seats
var MotorBike = function() {
  this.wheels = 4;
  this.engines = 1;
  this.seats = 1;
};

var myMotorBike = new MotorBike();


//  Waypoint 3: Make Object Properties Private
//  Let's create an object with two functions. One attached as a property and one not.

var Car = function() {
  this.gear = 1;
  function addStyle(styleMe){
    return 'The Current Gear Is: ' + styleMe;
  }
  this.getGear = function() {
    return addStyle(this.gear);
  };
};

var Bike = function() {
  // speed is private
  speed = 100;
  function addUnit(value) {
    return value + "KM/H";
  }
  
  // while getSpeed is public    
  this.getSpeed = function () {
    return addUnit(speed);
  };
  
};

var myCar = new Car();
var myBike = new Bike();


//  Waypoint 4:  Make Instances of Objects with a Constructor Function

var Car = function() {
   this.wheels = 4;
};

var myCar = new Car();

//Add the property "engines" to myCar, and make it a number.
myCar.engines = 1;


//  Waypoint 5: Iterate over Arrays with map
//  Use map to add three to each value in the array
var array = [1,2,3,4,5];

array = array.map(function(value) {
          return value+3; });

console.log("Added 3 to every value of array = " + array);
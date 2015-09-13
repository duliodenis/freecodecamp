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
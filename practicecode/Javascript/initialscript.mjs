

function setup() {
  createCanvas(100, 50);
  background(153);
  line(0, 0, width, height);
  console.log("meeeeee")
}

function draw() {

}

  // in line comment
  var sum = 10 + 10;
  console.log(sum);
  // in line comment
  var sum = 10 + 10;
  console.log(sum);

  var quote = "I said, \"Not today, mister!\"";
  console.log(quote);

  var squote = 'This string is "single quoted"';
  console.log(squote);

  var myStr = "FirstLine\n\t\SecondLine\nThirdLine";
  console.log(myStr);
  var myStrLen = myStr.length;
  console.log(myStrLen);

  //strings are immutable!!

  var immMyStr = "Jello World";
  //immMyStr[0] = "H"; <- this does not work!! Instead,
  immMyStr = "Hello World";

  //For last letter in string, immMyStr[immMyStr.length-1]

  function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb + ".";
    return result;
  }
  console.log(wordBlanks("dog", "big", "ran", "quickly"));
  console.log(wordBlanks("bike", "skinny", "peddled", "slowly"));

  var myArray = ["John", 23, 6.8];
  //use array indices to edit myArray
  myArray[myArray.length - 1] = 5.7;
  console.log(myArray);

  //Multidimensional arrays
  var myMultArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]];
  var myData = myMultArray[0][0]; //myData is pointing to 1 (in the 0th array in the 0th position)
  myData = myMultArray[3][0][1]; //myData is set to 11
  console.log(myData);

  //Append to array with .push
  myArray.push("Male");
  console.log(myArray);

  //Using a nested array for a shopping list
  var myList = [["cereal", 3], ["milk", 2], ["bananas", 3], ["juice", 2], ["eggs", 12]];

  //function declaration
  function myFunctionName() {
    console.log("Function has been called!");
  }
  //function call
  myFunctionName();

  //function with parameters (subtracts p2 from p1)
  function ourFunctionWithArgs(a, b) {
    console.log(a - b);
  }
  ourFunctionWithArgs(10, 7);

function myLocalScope() {
  var myVar = 5;
  console.log(myVar);
}
myLocalScope();
//console.log(myVar); this would produce an error since myVar is out of scope

//you can have local and gobal variables of the same name
//when this happens, the local variable takes precedent over the global variable
var outerWear = "T-Shirt"; //global variable
function myOutfit() {
  var outerWear = "Sweater";
  return outerWear; //local variable
}
console.log(myOutfit()); //log now prints "Sweater" instead of "T-Shirt"
console.log(outerWear); //this prints "T-Shirt"

//returning from functions
function minusSeven(num) {
  return num - 7;
}
console.log(minusSeven(10)); //prints 3 which is what is returned from function

//returning undefined from function
var sum = 0;
function addThree() {
  sum = sum + 3;
}

function addFive() {
  sum += 5;
}
console.log(addThree()); //prints value of sum + 3 (just 3 in this case)

//assignment with a returned value
var changed = 0;

function change(num) {
  return (num + 5) / 3;
}
change = change(10);

var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7)

//stand in line (queues) new items added to back, old item taken from front
function nextInLine(arr, item) {
  arr.push(item); //pushes new item onto the end of the array taken as an argument
  return arr.shift(); //shift() removes the first item and returns that item
}

var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr)); //JSON.stringify() changes the array to a string
console.log(nextInLine(testArr, 6)); //adding an item to the array and pops the first item from array
console.log("After: " + JSON.stringify(testArr));

//boolean values
function welcomeToBooleans() {
  return false;
}

//conditional logic with if statements
function ourTrueOrFalse(isItTrue) {
  if (isItTrue) {
    return "Yes, it's true";
  }
  return "No, it's false";
}
function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";
}
console.log(trueOrFalse(true)); //prints "Yes, that was true"

//comparison with equality operator
function testEqual(val) {
  if (val == 12) {
    return "Equal";
  }
  return "Not Equal";
}
console.log(testEqual(10)); //will print Not Equal

//comparison with the strict equality operator
//strict equality operator is ===
//== attempts to convert both values to a common type while the strict equality operator (===) does not convert type
// 3 === 3 --> evaluates to true
// 3 === '3' --> evaluates to false
//if both of these above were ==, they would both be true becasue the string is conveted to an integer

function testStrict(val) {
  if (val === 7) {
    return "Equal";
  }
  return "Not Equal";
}
console.log(testStrict(7)); //returns equal
console.log(testStrict('7')); //returns not equal

//more equality operator
function compareEquality(a, b) {
  if (a == b) {
    return "Equal";
  }
  return "Not Equal";
}
console.log(compareEquality(10, "10")); //evaluates to equal

//inequality operator
function testNotEqual(val) {
  if (val != 99) {
    return "Not Equal";
  }
  return "Equal";
}
console.log(testNotEqual(10)); //evaluates to not equal

//strict inequality operator (does not convert types when comparing)
function testStrictNotEqual(val) {
  if (val !== 17) {

    return "Not Equal";
  }
  return "Equal";
}
console.log(testStrictNotEqual('17')); //evaluates to not equal

//and operator
function testGreaterThan(val) {
  if (val > 100) {
    return "Over 100";
  }
  if (val > 10) {
    return "Over 10";
  }
  return "10 or Under";
}
console.log(testGreaterThan(10)); //return 10 or Under

function testGreaterOrEqual(val) {
  if (val >= 20) {
    return "20 or Over";
  }
  if (val >= 10) {
    return "10 or Over";
  }
  return "Less than 10";
}
console.log(testGreaterOrEqual(10)); //returns 10 or Over
//also works with < and <= (less than operators)

//and/or operators
function testLogicalAnd(val) {
  if (val <= 50 && val >= 25) {
    return "Yes";
  }
  return "No";
}
console.log(testLogicalAnd(10)); //returns No

function testLogicalOr(val) {
  if (val < 10 || val > 20) {
    return "Outside";
  }
  return "Inside";
}
console.log(testLogicalOr(10)); //returns Inside

//else statements
function testElse(val) {
  var result = '';
  if (val > 5) {
    result = "Bigger than 5";
  }
  else {
    result = "5 or smaller";
  }
  return result;
}
console.log(testElse(5)); //returns 5 or smaller

//else if
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }
  else if (val < 5) {
    return "Smaller than 5";
  }
  else{
    return "Between 5 and 10";
  }
}
console.log(testElseIf(7)); //evaluates to Between 5 and 10

//logical order in else statements
//if first if statement is true, then it returns even if subsequent if statements are true
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  }
  else if (val < 10) {
    return "Less than 10";
  }
  else {
    return "Greater than or equal to 10";
  }
}
console.log(orderMyLogic(3)); //returns less than 5

//chaining if else statements
function chainingIfElse(val) {
  if (val < 5) {
    return "Tiny";
  }
  else if (val < 10) {
    return "Small";
  }
  else if (val < 15) {
    return "Medium";
  }
  else if (val < 20) {
    return "Large";
  }
  else {
    return "Huge";
  }
}
console.log(chainingIfElse(20)); //returns Large

//Golf code
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  if (strokes == 1) {
    return names[0];
  }
  else if (strokes <= par - 2) {
    return names[1];
  }
  else if (strokes == par - 1) {
    return names[2];
  }
  else if (strokes == par) {
    return names[3];
  }
  else if (strokes == par + 1) {
    return names[4];
  }
  else if (strokes == par + 2) {
    return names[5];
  }
  else if (strokes >= par + 3) {
    return names[6];
  }
}
console.log(golfScore(5, 4)); //returns Birdie

//switch statements
//cases use the strict equality operator, so vars must be same type
function caseInSwitch(val) {
  var answer = "";
  switch(val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
    default: //default is like an else for a switch statement
      answer = "theta";
      break;
  }

  return answer;
}
console.log(caseInSwitch(1));

//switch statements that do the same things
function sequentialSizes(val) {
  var answer = "";
  switch(val){
    case 1:
    case 2:
    case 3:
      answer = "Low"
      break
    case 4:
    case 5:
    case 6:
      answer = "Mid"
      break
    case 7:
    case 8:
    case 9:
      answer = "High"
      break
  }
  return answer;
}
console.log(sequentialSizes(1));

//strings can also be case titles
function chainToSwitch(val) {
  var answer = "";
  switch(val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Misses me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
  }
  return answer;
}
console.log(chainToSwitch(42));

//return boolean from functions
function isLess(a, b) {
  return a < b; //this returns to a true or false statement obviously
}
console.log(isLess(20, 15));

//returning early from functions
function abTest(a, b) {
  if (a < 0 || b < 0) {
    return undefined
  }

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
console.log(abTest(-2, 2)); //returns undefined/null

//blackjack card counting function
var count = 0;
function cc(card) {
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
    count--;
    break;
  }

  var holdbet = 'Hold';
  if (count > 0) {
    holdbet = 'Bet';
  }
  return count + " " + holdbet;
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
console.log(cc(4));

//Javascript objects --> like arrays but instead of using indexes to access items you use properties
var ourDog = {
  "name" : "Camper",
  "legs" : 4,
  "tails" : 1,
  "friends" : ["everything!"]
};
var myDog = {
  "name" : "Quincy",
  "legs" : 3,
  "tails" : 2,
  "friends" : []
};

//assigning javascript object properties with dot notation
var testObj = {
  "hat" : "ballcap",
  "shirt" : "jersey",
  "shoes" : "cleats"
};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;

//object properties with bracket notation
var testObj = {
  "an entree" : "hamburger",
  "my side" : "veggies",
  "the drink" : "water"
};

var entreeValue = testObj["an entree"];
var drinkValue = testObj['the drink'];

//object properties with variables
var testObj = {
  12 : "Namath",
  16 : "Montana",
  19 : "Unitas"
};

var playerNumber = 16;
var player = testObj[playerNumber];

//updating object properties
var ourDog = {
  "name" : "Camper",
  "legs" : 4,
  "tails" : 1,
  "friends" : ["everything!"]
};
ourDog.name = "Happy Camper";

var myDog = {
  "name" : "Quincy",
  "legs" : 3,
  "tails" : 2,
  "friends" : []
};
ourDog.name = "Happy Quincy";

//add new properties to an object (using ourDog above)
ourDog.bark = "bow wow"; //adds the property bark to the object ourDog and sets it equal to "bow wow"

myDog['bark'] = "woof!"; //adds/replaces the property bark and sets it equal to "woof!"

//delete properties from an object (using ourDog above)
delete ourDog.bark;

delete myDog.tails;

//using objects for lockup (using them like a key-value storage dictionary)
function phoneticLookup(val) {
  var result = "";

  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  }
  result = lookup[val];
}
console.log(phoneticLookup("foxtrot"));

//testing objects for properties
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  if (myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp];
  }
  else {
    return "Not Found"
  }
}
console.log(checkObj("gift"));

//manipulating complex objects
var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
    "artist": "Beau Carnes",
    "title": "Cereal Man",
    "release_year": 2003,
    "formats": [
      "Youtube video",
      "Pornhub video"
    ]
  }
];
var lookupMyMusic = myMusic[0].formats[1];
console.log(lookupMyMusic);

//accessing nested objects
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
    },
    "outside": {
      "trunk": "jack"
    }
  }
};
var gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents);

//accessing nested arrays
var myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

var secondTree = myPlants[1].list[1];


//Record collection program
var collection = {
  "2548": {
    "album": "Slippery When Wet",
    "artist": "Bon Jovi",
    "tracks": [
      "Let It Rock",
      "You Give Love a Bad Name"
    ]
  },
  "2468": {
    "album": "1999",
    "artist": "Prince",
    "tracks": [
      "1999",
      "Little Red Corvette"
    ]
  },
  "1245": {
    "artist": "Robert Palmer",
    "tracks": []
  },
  "5439": {
    "album": "ABBA Gold"
  }
};

var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
  if (value === "") {
    delete collection[id][prop];
  }
  else if (prop === "tracks") {
    collection[id][prop] = collection[id][prop] || []; // either collection id[prop] equals itself, or it is set to an empty array, creating a new spot for the new property
    collection[id][prop].push(value);
  }
  else {
    collection[id][prop] = value;
  }
  return collection;
}
updateRecords(2468, "tracks", "test");
console.log(updateRecords(5439, "artist", "ABBA")); //changes the artist in 5439 to ABBA

//iterate with while loops
var myArray = [];
var i = 0
while(i < 5) {
  myArray.push(i);
  i++;
}
console.log(myArray);

//iterate with for loops
var ourArray = [];

for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}
var myArray = [];

for (var i = 1; i < 6; i++) {
  myArray.push(i);
}
console.log(myArray);

//iterating odd numbers with a for loop (2:13:55)
var ourArray = [];
for (var i = 0; i < 10; i += 2) {
  ourArray.push(i);
}
console.log(ourArray);

var myArray = [];
for (var i = 1; i < 10; i += 2) {
  myArray.push(i);
}
console.log(myArray);

//count backwards with a for loop
var ourArray = [];
for (var i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}
console.log(ourArray);

var myArray = [];
for (var i = 9; i > 0; i -= 2) {
  myArray.push(i);
}
console.log(myArray);

//iterate through an array with a for loop
var ourArr = [9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
  ourTotal += ourArr[i];
}
console.log(ourTotal);

var myArr = [2, 3, 4, 5, 6];
var myTotal = 0;

for (var i = 0; i < myArr.length; i++) {
  myTotal += myArr[i];
}
console.log(myTotal);

//nesting for loops
function multiplyAll(arr) {
  var product = 1;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  return product;
}

var product = multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
console.log(product);

//iterate with do...while loops
//do... while loops will always run once before checking the condition, while loops always check the condition before running

var myArray = [];
var i = 10;

do {
  myArray.push(i);
  i++;
} while (i < 5)

console.log(i, myArray);

//Profile lookup
var contacts = [
  {
    "firstName": "Akira",
    "lastName": "Laine",
    "number": "0543236543",
    "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
    "firstName": "Harry",
    "lastName": "Potter",
    "number": "0994372684",
    "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
    "firstName": "Kristian",
    "lastName": "Vos",
    "number": "unknown",
    "likes": ["JavaScript", "Gaming", "Foxes"]
  }
];

function lookUpProfile(name, prop){
  for (var i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      return contacts[i][prop] || "No such property"; //this or statement says that is contacts[i][prop] does not exist, then return "NSP"
    }
  }
  return "No such contact";
}
var data = lookUpProfile("Kristian", "number");
console.log(data);

//Generate Random Fractions
function randomFraction() {
  return Math.random(); //randomly generates a number (decimal) between 0 and 1 but cannot be 0 or 1
}
console.log(randomFraction());

//Math.floor(arg) rounds arg to the nearest whole number
//Generate random whole numbers
var val = 20; //random val will be between 0 and 19
var randomNumberBetween0andVal = Math.floor(Math.random() * val);

function randomWholeNum() {
  return Math.floor(Math.random() * 10); //generates a random number between 0 and 9
}
console.log(randomWholeNum());

//generate random whole numbers within a range
function ourRandomRange(ourMin, ourMax) {
  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}
ourRandomRange(1, 9);

function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
var myRandom = randomRange(5, 15);
console.log(myRandom);

//parseInt function
//takes a string and turns it into an integer or returns NAN (not a number)
function convertToInteger1(str) {
  return parseInt(str);
}
convertToInteger1("56");

//using parseInt with a radix
function convertToInteger2(str) {
  return parseInt(str, 2); //sets the default base to 2 so the computer knows it's a binary operator
}
convertToInteger2("10011");

//use the conditional (Ternary) Operator
function checkEqual(a, b) {
  return a === b ? 10 : 20; // if a === b, then checkequal is 10 and if not it is 20
}
console.log(checkEqual(15, 15));

//multiple ternary operators
function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero"; //if num > 0, pos, elif num < 0, neg, else, zero
}

console.log(checkSign(-10))

//difference between var and let keywords
//let does not let you declare a variable twice
let catName = "Quincy";
var quote;
catName = "Beau";

function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";
}
catTalk();
//compare scopes between let and var
//the scope of let is the block statement that it was declared in
function checkScope() {
  "use strict";
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}
checkScope();

//declare a read-only variable with the const keyword
//if you declare a variable as const, you cannot reassign it afterwards
//declaring const variables in all caps is a common practice
function printManyTimes(str) {
  "use strict";

  const SENTENCE = str + " is cool!";

  for(var i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }
}
printManyTimes("freeCodeCamp");

//mutate an array declared with const
const s = [5, 7, 2];
function editInPlace() {
  "use strict";

  //s = [2, 5, 7]; does not work
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
}
console.log(s);

//prevent object mutation
function freezeObj() {
  "use strict";
  const MATH_CONSTANTS = {
    PI: 3.14
  };

  Object.freeze(MATH_CONSTANTS); //makes the const variable immune to mutation

  try {
    MATH_CONSTANTS.PI = 99;
  } catch ( ex ) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
//const PI = freezeObj();

//use arrow functions to write concise anonymous functions
var magic = function() {
  return new Date();
}
//instead of this ^, do this v
var magic = () => new Date(); //also use const

//passing arguments to arrow functions
const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));

//write high order arrow functions
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
  const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
  return squaredIntegers;
};
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

//write higher order arrow functions with default
const increment = (function() {
  return function increment(number, value = 1) {
    return number + value;
  };
})();
console.log(increment(5, 2));
console.log(increment(5)); //returns 6 since the second argument is not specified and is set to 1 by default

//use the rest operator with function parameters
//the rest operator (...) allows you to create a function that takes a variable number of arguments
var sum = (function() {
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3, 4, 5));

//use the spread operator to evaluate arrays in-place
//it spreads an array into its individual parts
//you can only use it in an argument to a function and an array literal
//arr2 is made into a copy of arr1 instead of an exact reference, so arr2 is not changed when arr1 is
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  arr2 = [...arr1];
  arr1[0] = 'potato'
})();
console.log(arr2);

//Use destructuring assignment to assign variables from objects
//this is a syntax of neatly assigning values from an object to a variable
var voxel = {x: 3.6, y: 7.4, z: 6.54};

var x = voxel.x;
var y = voxel.y;
var z = voxel.z;
//v this is a better way of writing values in objects to variables than this ^^^ (with const)
var { x : a, y : b, z : c } = voxel;

const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
  "use strict";
  //const tempOfTomorrow = undefined; change this line with destructuring
  const { tomorrow : tempOfTomorrow } = avgTemperatures; //get the tomorrow field from the avgTemperatures object and assign it to tempOfTomorrow
  return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); //should be 79

//destructuring assignment with nested objects (3:00:17)
const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
  "use strict";
  const { tomorrow: { max : maxOfTomorrow} } = forecast;

  return maxOfTomorrow;
}
console.log(getMaxOfTmrw(LOCAL_FORECAST));

//using destructuring assignment to assign variables from arrays
var [z, x, , y] = [1, 2, 3, 4, 5, 6]; //y is set to the 4th element
console.log(z, x, y);

var a = 8, b = 6;
(() => {
  "use strict";
  [a, b] = [b, a]

})();
console.log(a);
console.log(b);

//use destructuring assignment with the rest operator
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
  const [ , , ...arr] = list; // do nothing for the first element, do nothing for the second element, then put the rest into the arr variable

  return arr;
}
var arr = removeFirstTwo(source);
console.log(arr);
console.log(source);

//use destructuring assignment to pass an object as a function's parameters
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = (function() {
  return function half({ max, min }) { //max and min are destructured from the stats variable using {}
    return (max + min) / 2.0; //makes it so you can just use max and min here instead of stats.max and stats.min
  };
})();
console.log(stats);
console.log(half(stats));

//create strings using template literals
//template literals are a special type of string that makes creating complex strings easier
const person = {
  name: "Zodiac Hasbro",
  age: 56
};
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`; //you can make multi line strings with the `` marks instead of the '' or "" marks, you can also use quotes in your string without having to escape them
//you can also put variables right into the string with template literals
console.log(greeting);

//coding challenge
var result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
  const resultDisplayArray = [];
  for(var i = 0; i < arr.length; i++) {
    resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`);
  }
  return resultDisplayArray;
}

const resultDisplayArray = makeList(result.failure);
console.log(resultDisplayArray);

//write concise object literal declarations using simple fields
const createPerson = (name, age, gender) => ( { name, age, gender }); //takes in 3 variables and returns an object made with those variables where the key names are the variable names
console.log(createPerson("Zodiac Hasbro", 56, "male"));

//write concise declarative functions
//an object can contain a function
const bicycle = {
  gear: 2,
  setGear(newGear) { //if an object component is a function, you can take off the : and the function from the declaration
    "use strict";
    this.gear = newGear; // the this. keyword allows the object to reassign its own component
  } //this gives the object bicycle the function component of setGear that takes newGear as an argument
};
bicycle.setGear(3);
console.log(bicycle.gear);

//use class syntax to define a constructor function

//this is the old way to instantiate an object
/*
//constructor function for the object
var SpaceShuttle = function(targetPlanet){
  this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter'); //new keyword to create a new instance of the SpaceShuttle object

console.log(zeus.targetPlanet);
*/
//the class syntax replaces the constructor function creation
class SpaceShuttle {
  constructor(targetPlanet){
    this.targetPlanet = targetPlanet;
  }
}
var zeus = new SpaceShuttle('Jupiter'); //new keyword to create a new instance of the SpaceShuttle object

console.log(zeus.targetPlanet);

///
function makeClass1() {
  class Vegetable {
    constructor(name){
      this.name = name;
    }
  }
  return Vegetable;
}
const Vegetable = makeClass1(); //makeClass returns a vegetable class
const carrot = new Vegetable('carrot'); //'carrot' passed into an instance of the Vegetable class and set to this.name
console.log(carrot.name);

//using getters and setters to control access to an object
class Book {
  constructor(author) {
    this._author = author;
  }
  get writer() {
    return this._author;
  }
  set writer(updatedAuthor){
    this._author = updatedAuthor;
  }
}

function makeClass2() {
  class Thermostat {
    constructor(temp) {
      this._temp = 5/9 * (temp - 32);
    }
    get temperature() {
      return this._temp;
    }
    set temperature(updatedTemp) {
      this._temp = updatedTemp;
    }
  }
  return Thermostat;
}

const Thermostat = makeClass2();
const thermos = new Thermostat(76);
let temp = thermos.temperature; //getters and setters are accessed like properties, without (), so this sets temp = to get temperature()
thermos.temperature = 26; //again, no () needed on the setters
temp = thermos.temperature;
console.log(temp);

//understand the differences between import and require
//go to top of file for import statement
import { capitalizeString } from "./initialscriptP2.js"; //this file will assume the file type is .mjs since it is one, so you must specify .js, also the ./ at the start is for files in the same directory
//also to get this import to work, you must go in your html file where you put the script and add type="module"

const cap = capitalizeString("hello!");
console.log(cap);

//use export to reuse a code block
const capitalizeString1 = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
export { capitalizeString1 };
export const foo = "bar";
export const bar = "foo";
// now these two variables and this function have been exported and can be imported by another file

//using * to import everything from a file
import * as initialscriptP2Object from "./initialscriptP2.js"; // imports everything from the file

//create an export fallback with export default
//used only if you want to export only 1 thing from a file
export default function subtract(x,y) {return x - y;} //this is the fallback export

//import a default export
//go to initialscriptP2
//subtract(7,4);


///JAVASCRIPT TUTORIAL COMPLETE!

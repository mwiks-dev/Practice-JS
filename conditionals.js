//TERNARY EXPRESSIONS 

// Example 1
const fare = 300;

let isExpensive ;

fare >= 300 ? (isExpensive = true) : (isExpensive = false);

console.log(isExpensive);
//This will return true because our fare is equal to 300

// Example 2
const age = 6;

let underAge = age >= 18 ? true:false

console.log(underAge);
 //This returns a false because when the conditional code returns true,the code returns true, and when the conditional code returns false the code returns false

//Example 3

const years = 20;
let ageMessage = years >= 18 ? 'You are now adult' : 'Enjoy your youth'
console.log(ageMessage);
//Returns 'You are now an adult'

//IF STATEMENTS

const price = 600;
let inflation ;
if (price >= 500){
    inflation = true
}
console.log(inflation);
//Returns true because our price is greater than 500

//If statement with else
const shoePair = 3500;
let quality ;
if (shoePair < 2500){
    quality = 'poor'
} else {
    quality = 'good'
}
console.log(quality); 
//Returns good because our shoe pair is greater than 2500

//SWITCH STATEMENT
const title = "Alice";
let greeting;

switch (title) {
  case "Alice":
    greeting = "Hello, Alice!";
    break;
  case "The White Rabbit":
    greeting = "Don't be late, White Rabbit";
    break;
  case "The Mad Hatter":
    greeting = "Welcome to the tea party, Mad Hatter";
    break;
  case "The Queen of Hearts":
    greeting = "Please don't chop off my head!";
    break;
  default:
    greeting = "Who are you?";
}

console.log(greeting);
//will return 'Hello, Alice!'

const name = "Grumpy";
let characterType;

switch (name) {
  case "Sleepy":
  case "Sneezy":
  case "Happy":
  case "Grumpy":
  case "Bashful":
  case "Dopey":
  case "Doc":
    characterType = "dwarf";
    break;
  case "Handsome Prince":
    characterType = "hero";
    break;
  case "Evil Queen":
    characterType = "villain";
    break; //break is used to stop the switch statement from continuing to look at case statements once it finds a match. If we left out the break keywords, the JavaScript engine would first assign characterType to "dwarf" when it reached the "Grumpy" case (as desired), but the code would continue to execute and characterType would wind up being reset to "minor character." To keep that from happening, we use break to tell the JavaScript engine to stop executing the switch statement as soon as it finds a match. 
  case "Snow White":
    characterType = "heroine";
    break;
  default: //this keyword is similar to else in an if else statement but is different in such a way that the only time it does not run is if the engine hits a break in one of the case statements
    characterType = "minor character";
}

console.log(characterType);

//Advanced 
const agey = 21;
let isAdult, canWork, canEnlist, canDrink;

switch (true) {
  case agey >= 21:
    canDrink = true;
  case agey >= 18:
    isAdult = true;
    canEnlist = true;
  case agey >= 16:
    canWork = true;
}
console.log(canWork);
// Interpolation using console.log
console.log(
  `Age: ${age}, Can work: ${canWork}, Can enlist: ${canEnlist}, Is a legal adult: ${isAdult}, Can drink: ${canDrink}`
);
//canEnlist;
//isAdult;
//canDrink;

//Since the age is set to 21 all cases will pass since there is no break statement,but if the age was to be changed to 20 the first case would fail but the other two would pass

// REPETITION IN JS:THE WHILE LOOP

// while (true) {
//   console.log("say this forever...");
// }
// Any truthy value will have the same effect

while (null) {
  console.log("I will never run");
}
// A falsey value won't run

// Initialize a counter variable; note that we need to use `let` here
let count = 10; 
while (count > 3) {
  //A Boolean expression that uses the counter to decide whether to keep looping
  console.log(`I am the ${count}, I love to count!`); // The work the loop does
  //method 1
  // count = count + 1; // Update the counter variable; this keeps track of how many times the loop has executed
  //method 2
  // take the value of count, add 1 to it and then assign that result to count:assignment operator
  // count += 1;
  // increment and decrement operators can be used as well where you want to add or minus one
  count --;
}

//THE DO ...WHILE LOOP
//Similar to while only that it will always execute atleast once
//As an example, this might be useful for asking a user to create a password. The do while loop will always ask them to enter their password the first time, and can continue to ask as long as (while) the value they enter doesn't meet the password requirements.
do{
  console.log('Enter Password')
}while (false);

//TERNARY EXPRESSIONS 

// Example 1
const fare = 300;

let isExpensive ;

fare >= 300 ? (isExpensive = true) : (isExpensive = false);

isExpensive;
//This will return true because our fare is equal to 300

// Example 2
const age = 6;

let underAge = age >= 18 ? true:false

underAge;
 //This returns a true because when the conditional code returns true, return true, and when the conditional code returns false, return false

//Example 3

const years = 20;
let ageMessage = years >= 18 ? 'You are now adult' : 'Enjoy your youth'
ageMessage;
//Returns 'You are now an adult'

//IF STATEMENTS

const price = 400;
let inflation ;
if (price >= 500){
    inflation = true
}
inflation;
//Returns false because our price is less than 500

//If statement with else
const shoePair = 3500;
let quality ;
if (shoePair < 2500){
    quality = 'poor'
} else {
    quality = 'good'
}
quality; 
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

greeting;
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

characterType;

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
canWork;
//canEnlist;
//isAdult;
//canDrink;

//Since the age is set to 21 all cases will pass since there is no break statement,but if the age was to be changed to 20 the first case would fail but the other two would pass



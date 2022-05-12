// Ternary expressions

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

//If statements
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
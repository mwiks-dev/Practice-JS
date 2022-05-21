// Conventionally, a function that does nothing is called a "noop" (pronounced "no op") — sometimes they come in handy!
function greeting(){
    console.log('Hi JavaScripters!')
}
greeting();

function doSomething(thing) {
    console.log(thing);
  }
  
  doSomething("This is amazing");

//A parameter is a placeholder that stores whatever value gets passed in as an argument.Essentially, the arguments are the actual values that we pass to the function, and the parameters are the named references where we store those passed-in values
// JavaScript assigns values to parameters based solely on the order of the arguments that are passed.
function sayHi(greeting,firstName){
  console.log(`${greeting},${firstName}`);
}
sayHi('Hello' ,'Mwiks')

function say(greeting, firstName) {
  // console.log("I was called!");
  return `${greeting}, ${firstName}!`;
}
console.log(say("Howdy", "partner"));

function eat(appetizer,mainCourse, dessert){
  return `${appetizer},${mainCourse},${dessert}`;
}
console.log(eat("Wine","Fried chicken with rice","Chocolate and Yoghurt"))

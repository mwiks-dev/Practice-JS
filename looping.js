//Looping vs Iteration
//Looping is the process of executing a set of statements repeatedly until a condition is met. It's great for when we want to do something a specific number of times (for loop) or unlimited times until the condition is met (while or do while loop).
//Iteration is the process of executing a set of statements once for each element in a collection. We can accomplish this with a for loop or while loop as shown below:
let myArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}
//while loop:
let j = 0;

while (j < myArray.length) {
  console.log(myArray[j++]);
}
//But the for...of loop is a better choice for iterating over arrays.
const Array = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

for (const element of Array) {
  console.log(element);
}
//The for...in loop is a better choice for iterating over objects.
const address = {
    street1: '11 Broadway',
    street2: '2nd Floor',
    city: 'New York',
    state: 'NY',
    zipCode: '10004',
  };
  
  for (const key in address) {
    console.log(key);
  }
// This only passes the keys of the object, not the values.
//Accessing the object's values is as simple as combining the passed-in key with the bracket operator:
for (const key in address) {
    console.log(address[key]);
  }
  


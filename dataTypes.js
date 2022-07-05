//Nesting of arrays and objects
const englishMusicByCity = {
    manchester: [
      {
        bandName: "The Smiths",
        memberNames: ["Morrissey", "Johnny", "Andy", "Mike"],
      },
      {
        bandName: "Joy Division",
        memberNames: ["Peter", "Stephen", "Bernard", "Ian"],
      },
    ],
  };

//Bracket notation used to get information from nested arrays and list
englishMusicByCity["manchester"][0]["bandName"]; //=> "The Smiths"
englishMusicByCity["manchester"][0]["memberNames"]; //=> ["Morrissey", "Johnny", "Andy", "Mike"]

console.log(
  `There were ${englishMusicByCity["manchester"][0]["memberNames"].length} members in ${englishMusicByCity["manchester"][0]["bandName"]}`
);
//=> "There were 4 members in The Smiths"
const board = [
  ["X", "O", " "],
  [" ", "X", "O"],
  ["X", " ", "O"],
];

console.log(board);
console.log(board[0][0]);
// => "X"
console.log(board[0][2]);
// => " "
console.log(board[2][2]);
// => "O"
//IMMUTABILITY - Some methods update or mutate the object they are called on; these methods are referred to as destructive. Other methods, known as nondestructive methods, leave the object intact. For example, the String method toUpperCase() is nondestructive:

const string = "Hello";
console.log(string.toUpperCase());
//=> "HELLO"
console.log(string);
//=> "Hello"

// array_methods = add elements in an array(push(), unshift(),spreadoperator()), 
                // remove elements in an array(pop(),shift(),slice(),splice()),
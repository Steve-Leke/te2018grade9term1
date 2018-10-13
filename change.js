const READLINE = require('readline-sync');

// console.log("Type anything and I'll repeat it back!");
// let userInput = READLINE.question();
// console.log("Thanks For Typing, "+ userInput);





// ask the user how many pennies he/she wants change for
console.log("How many pennies do you want us to make change for?");
let change = READLINE.question();
let leftOver = (undefined);





// declare, assign, and print how many quarters you can make out of the pennies

let quarters = Math.floor(change/25);
console.log("You will recieve " + quarters + " quarters!");
leftOver = change%25;




// declare, assign, and print how many dimes you can make out of the pennies
let dimes = Math.floor(leftOver/10);
console.log("You will recieve " + dimes + " dimes!");
leftOver = leftOver%10;

// let dimes = Math.floor((pennies-quarters*25)/10);


// declare, assign, and print how many nickels you can make out of the pennies
let nickels = Math.floor(leftOver/5);
console.log("You will recieve " + nickels + " nickels!");
leftOver = leftOver%5;



// declare, assign, and print how many pennies are left over
let pennies = Math.floor(leftOver/1);
console.log("You will recieve " + pennies + " pennies!");

let coinMachine = {
  quarters: quarters,
  dimes: dimes,
  nickels: nickels,
  pennies: pennies,
};
console.log(coinMachine);



// make a change drawer using an object to
// store all of your change
// each property on the object should represent the particular coin
// use the dot operator on the object to assign how many of each coin you have
// many coins are in the drawer
// print the drawer to see that the values are correct

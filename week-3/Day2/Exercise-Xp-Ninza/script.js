// Exercise 1 : Age Difference
// Instruction
// Given the years two people were born, find the date when the younger one is exactly half the age of the older.
// Notes: The dates are given in the format YYYY


// const oldYearOfBorn = 2000;     //young man date of birth
// const youngYearOfBorn = 2030;       //old man date of birth
// const ageDif = youngYearOfBorn - oldYearOfBorn;       // age of old man at the moment young was born
// const lookingYear = ageDif+ young;  // the year when the old man wiil got double of her age from the date of young man birth
// console.log(lookinYear);


// Exercise 2 : Zip Codes
// Instruction
// Harder exercise
// Hint : This exercise has 2 parts. First, do this exercise without Regular Expressions, then do it using Regular Expressions

// While working in a Post Office you must have the clients’ zip code in order to send them their letters.
// Ask the client for their zip code and console.log “success” or “error” based on the following rules.
// Zip codes consists of 5 numbers
// Must only contain numbers
// Must not contain any whitespace (spaces)
// Must not be greater than 5 digits in length

// let zipp = +prompt('Pls, write your Zip code here');

// if (!isNaN(zipp) && typeof(zipp) !== 'string' && zipp.toString().length === 5){
//   console.log('success');
// } else{
//   console.log('error')
// }

// Exercise 3 : Secret Word
// Instruction
// Harder exercise
// Hint : Use Regular Expressions

// Prompt the user for a word and save it to a variable.
// Delete all the vowels of the word and console.log the result.
// Bonus: Replace the vowels with another character and console.log the result
// // a = 1
// // e = 2
// // i = 3
// // o = 4
// // u = 5


// let userAnswer = prompt('Pls write one word');
// const novowels = userAnswer.replace(/[aeiou]/gi,'');
// console.log(novowels);
// const replaceCharacter = userAnswer.replace(/[aeiou]/gi,'2' );
// console.log(replaceCharacter);
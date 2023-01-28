

// Exercise 1 : Is_Blank
// Instructions
// Write a program to check whether a string is blank or not.

// console.log(isBlank('')); --> true
// console.log(isBlank('abc')); --> false


// Exercise 2 : Abbrev_name
// Instructions
// Write a JavaScript function to convert a string into an abbreviated form.

// console.log(abbrevName("Robin Singh")); --> "Robin S."


// Exercise 3 : SwapCase
// Instructions
// Write a JavaScript function which takes a string as an argument and swaps the case of each character.
// For example :

// if you input 'The Quick Brown Fox' 
// the output should be 'tHE qUICK bROWN fOX'.


// Exercise 4 : Omnipresent Value
// Instructions
// Create a function that determines whether an argument is omnipresent for a given array.
// A value is omnipresent if it exists in every subarray inside the main array.
// To illustrate:

// [[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]]
// // 3 exists in every element inside this array, so is omnipresent.
// Examples

// isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1) ➞ true
// isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6) ➞ false


// function emptyStringCheck(){
// let userAnswer = prompt('Pls type some information');
// if (userAnswer === "" || userAnswer === " "){
//   return false;
// } else{
//   return true;
// }
// }
// emptyStringCheck();

// function secondNameAbrew(){

//   let familyName = prompt('Pls Type Your family name');
//   let firstName = prompt('Pls type your first name');
//   let firstNameMod = firstName.match(/[A-Z]/g).join("");

//   console.log(`${familyName} ${firstNameMod}`);

// // }
// // secondNameAbrew();

// function swap(str) {
//     let UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     let LOWER = 'abcdefghijklmnopqrstuvwxyz';
//     let result = [];
//     for (let i = 0; i < str.length; i++) {
//         if (UPPER.indexOf(str[i]) !== -1) {
//             result.push(str[i].toLowerCase());
//         } else if (LOWER.indexOf(str[i]) !== -1) {
//             result.push(str[i].toUpperCase());
//         } else {
//             result.push(str[i]);
//         }
//     }
//     return result.join('');
// }
// swap('hjhjhjhjdHHHHHH')


// function isOmnipresent(arr, val) {
//     for (let i = 0; i < arr.length; i++) {
//         if (!arr[i].includes(val)) {
//             return false
//         }
//     }
//     return true;
// }
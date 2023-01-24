// // 🌟 Exercise 1 : List Of People
// // Instructions
// // const people = ["Greg", "Mary", "Devon", "James"];


// // Part I - Review About Arrays
// // Write code to remove “Greg” from the people array.

// // Write code to replace “James” to “Jason”.

// // Write code to add your name to the end of the people array.

// // Write code that console.logs Mary’s index. take a look at the indexOf method on Google.

// // Write code to make a copy of the people array using the slice method.
// // The copy should NOT include “Mary” or your name.
// // Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
// // Hint: Check out the documentation for the slice method

// // Write code that gives the index of “Foo”. Why does it return -1 ?

// // Create a variable called last which value is the last element of the array.
// // Hint: What is the relationship between the index of the last element in the array and the length of the array?


// // const people = ["Greg", "Mary", "Devon", "James"];
// // // console.log(people.indexOf('Greg'));
// // // people.shift();
// // // console.log(people);
// // // console.log(people.indexOf('James'));
// // // people.splice(2,1, "Jason");
// // // console.log(people);
// // // people.push('Maksym');
// // // console.log(people);
// // // console.log(people.indexOf('Mary'));
// // // const newArray = people.slice(0,3);
// // // console.log(newArray);
// // // console.log(people.indexOf('Foo')); (if there is no such an element in array it gives -1);
// // const last =people.slice(-1);
// // console.log(last);

// // Part II - Loops
// // // Using a loop, iterate through the people array and console.log each person.

// // // Using a loop, iterate through the people array and exit the loop after you console.log “Jason” .
// // // Hint: take a look at the break statement in the lesson.


// // for (let users of people ){
// // //   console.log(users)
// // // }
// // 🌟 Exercise 2 : Your Favorite Colors
// // Instructions
// // Create an array called colors where the value is a list of your five favorite colors.
// // Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
// // Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// // Hint : create an array of suffixes to do the Bonus


// // const color = ['blue', 'white', 'red', 'yellow', 'black'];

// // for (let i = 0; i < color.length; i++){
// //   let newColor = color[i];
// //   console.log(`My ${[i+1]} choice is ${newColor}`)
// // };



// // const color = ['blue', 'white', 'red', 'yellow', 'black'];
// // const sufArray =['st','nd', 'rd','rd', 'th'];

// // for (let i = 0; i < color.length; i++){
// //   let newColor = color[i];
// //   let newSuf = sufArray[i];
// //   console.log(`My ${[i+1]+sufArray[i]} choice is ${newColor}`)
// // };

// // 🌟 Exercise 3 : Repeat The Question
// // Instructions
// // Prompt the user for a number.
// // Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

// // While the number is smaller than 10 continue asking the user for a new number.
// // Tip : Which while loop is more relevant for this situation?

// // let userQuestion = +prompt('Pls insert your number!');
// // console.log(typeof(userQuestion));
// // while (userQuestion < 10){
// //   console.log(`Your answer is ${userQuestion}`);
// //   userQuestion = +prompt('Pls insert your number!');
// //   if(userQuestion >=10){
// //     console.log('Great');
// //     break;
// //   } 
// // }

// // 🌟 Exercise 4 : Building Management
// // Instructions:
// // const building = {
// //     numberOfFloors: 4,
// //     numberOfAptByFloor: {
// //         firstFloor: 3,
// //         secondFloor: 4,
// //         thirdFloor: 9,
// //         fourthFloor: 2,
// //     },
// //     nameOfTenants: ["Sarah", "Dan", "David"],
// //     numberOfRoomsAndRent:  {
// //         sarah: [3, 990],
// //         dan:  [4, 1000],
// //         david: [1, 500],
// //     },
// // }

// const building = {
//     numberOfFloors: 4,
//     numberOfAptByFloor: {
//         firstFloor: 3,
//         secondFloor: 4,
//         thirdFloor: 9,
//         fourthFloor: 2,
//     },
//     nameOfTenants: ["Sarah", "Dan", "David"],
//     numberOfRoomsAndRent:  {
//         sarah: [3, 990],
//         dan:  [4, 1000],
//         david: [1, 500],
//     },
// }
// console.log(building["numberOfFloors"]);
// console.log(building["numberOfAptByFloor"]["firstFloor"]);
// console.log(building["numberOfAptByFloor"]["thirdFloor"]);
// console.log(building["nameOfTenants"][1]);
// console.log(building["numberOfRoomsAndRent"]["dan"][0]);

// const sum = building['numberOfRoomsAndRent']['sarah'][1]+building['numberOfRoomsAndRent']['david'][1];
// console.log(sum);

// if(sum > building['numberOfRoomsAndRent']['dan'][1]){
//   building['numberOfRoomsAndRent']['dan'][1] = 1200;
//   console.log(building['numberOfRoomsAndRent']['dan'])
// };

// 🌟 Exercise 5 : Family
// Instructions
// Create an object called family with a few key value pairs.
// Using a for in loop, console.log the keys of the object.
// Using a for in loop, console.log the values of the object.


// const family ={
//   motherNmae: 'Sara',
//   fatherName: 'David'
// }


// for (let key in family){
//   console.log(key)
// }

// for (let key in family){
//   console.log(family[key])
// }

// Exercise 6 : Rudolf
// Instructions
// const details = {
//   my: 'name',
//   is: 'Rudolf',
//   the: 'raindeer'
// }
// Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”

// const details = {
//   my: 'name',
//   is: 'Rudolf',
//   the: 'raindeer'
// };

// let sentence = '';

// for( let key in details){
//   sentence = sentence+ " " + key + " " + " " + details[key];

// }
// console.log(sentence);

// Exercise 7 : Secret Group
// Instructions
// const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
// Console.log the name of their secret society. The output should be “ABJKPS”

// const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// names.sort();
// console.log(names[0][0]+names[1][0]+names[2][0]+names[3][0]+names[4][0]+names[5][0]);
 

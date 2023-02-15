// 🌟 Exercise 1 : Find The Sum
// Instructions
// Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.

// let newF = ( a, b) =>{
//   let sum = a+b;
//   return sum;
// }
// newF(7,7);


// 🌟 Exercise 2 : Kg And Grams
// Instructions
// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

// First, use function declaration and invoke it.
// Then, use function expression and invoke it.
// Write in a one line comment, the difference between function declaration and function expression.
// Finally, use a one line arrow function and invoke it.

// function transformKgintoGr(weight){
//   let weightInGr = weight * 1000;
//   return weightInGr;
// }

// transformKgintoGr(20)

// let transformKgintoGr = function(weight){
//   let weightInGr = weight * 1000;
//   return weightInGr;
// }

// transformKgintoGr(40);

// function declaretion we declare function directly, function expression we declare function through the variable;

// let myFunction = (weight) =>{
//   let weightInGr = weight * 1000;
// return weightInGr;
// };
// myFunction(20);


// 🌟 Exercise 3 : Fortune Teller
// Instructions
// Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."


// (function(numberOfChildren, partnersName, geoLocation, jobTitle){
//   let body = document.body;
//   let para=document.createElement('p');
//   let text = document.createTextNode('');
//   para.appendChild(text);
//   body.appendChild(para);
//   para.innerHTML = (`You will be ${jobTitle} in ${geoLocation}, and married to ${partnersName} with ${numberOfChildren} kids`);
// }) ( 5, 'James', 'USA', 'Driver');



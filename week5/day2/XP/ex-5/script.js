// 🌟 Exercise 5 : Juice Bar
// Instructions
// You will use nested functions, to open a new juice bar.

// Part I:
// The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.

// The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

// Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.


// Part II:
// In the makeJuice function, create an empty array named ingredients.

// The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.

// Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>". Use the forEach method.

// The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.



// function makeJuice(size){

//   function addIngredients(firsting, seconding, thirding){
//     let div = document.getElementById('divname');
//     div.innerText = `The client wants a ${size} juice, containing ${firsting}, ${seconding}, ${thirding}.`;
//   }
//   addIngredients('banana', 'orange', 'apple');

// }
// makeJuice('small');


// Part II:


// function makeJuice(){
//   let ingredients = [];
//   function addIngredients(firstIng, seconding, thirdIng){
//     ingredients.push(firstIng, seconding, thirdIng);
//   }
// addIngredients('lemon', 'orange', 'banana');
// console.log(ingredients);
// }
// // makeJuice();


// function makeJuice(size){
//   let ingredients = [];
//   function addIngredients(firstIng, seconding, thirdIng){
//     ingredients.push(firstIng, seconding, thirdIng);
//   }

//   function displayJuice(){
//     ingredients.forEach((fruit) => {
//       let div = document.getElementById('divname');
//       let text = document.createTextNode(`The client wants a ${size} juice, containing ${fruit}, ${fruit}, ${fruit}`);
//       div.appendChild(text);

//     });
//   }

// addIngredients('lemon', 'orange', 'banana');
// console.log(ingredients);
// displayJuice()
// }
// makeJuice('big');

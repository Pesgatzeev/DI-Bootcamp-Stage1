// 🌟 Exercise 1: Timer
// Instructions
// Using this HTML code:

// <!DOCTYPE html>
//     <html>
//     <head>
//         <style>
//         p {
//           background: yellow;
//           color: red;
//         }
//         </style>
//     </head>
//     <body>
//         <div id="container"></div>
//         <button id="clear">Clear Interval</button>
//     </body>
//     </html>


// Part I
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will alert “Hello World”.
// function alertWords(){
//   alert('Hello world');
// }
// setTimeout( alertWords(), 1000);

// Part II
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.

// function para(){
// let parag = document.createElement('p');
// let text = document.createTextNode('Hello world');
// parag.appendChild(text);
// let div = document.querySelector('#clear');
// div.appendChild(parag);
// }

// setTimeout(para, 2000);

// Part III
// In your Javascript file, using setInterval, call a function every 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// The interval will be cleared (ie. clearInterval), when the user will click on the button.
// // Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.

// // const timer = setInterval(newParag, 2000);

// const id = setInterval(newParag, 1000);

// function newParag(){
//   console.log('hello'); 
//   let para = document.createElement('p');
//   let text = document.createTextNode('Hello World');
//   para.appendChild(text);
//   let div = document.querySelector('#container');
//   div.appendChild(para);
// }

// let button = document.querySelector('#clear');

//  button.addEventListener('click', stopinter);

//  function stopinter() {
//   clearInterval(id)
//  }




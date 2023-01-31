// // 🌟 Exercise 1 : Change The Article
// // Instructions
// // Copy the code below, into a structured HTML file:


// // Using a DOM property, retrieve the h1 and console.log it.

// // Using DOM methods, remove the last paragraph in the <article> tag.

// // Add a event listener which will change the background color of the h2 to red, when it’s clicked on.

// // Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).

// // Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.

// // BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)

// // BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google) 
// let h1 = document.body.firstElementChild.children[0];
// console.log(h1);
// let mainArt = h1.parentElement;
// console.log(mainArt);
// mainArt.lastElementChild.remove();

// let h2 = mainArt.children[1];
// console.log(h2);

// h2.addEventListener('click', changeBg);

// function changeBg(){
//   h2.style.backgroundColor = 'red';
// };

// let h3 = mainArt.children[2];
// console.log(h3);

// h3.addEventListener('click', displayNone);

// function displayNone(){
//   h3.style.display = 'none';
// }


// function changecolor(){
//   let para = document.querySelectorAll('p');
//   para.forEach( element => {
//   element.style.fontWeight = 'bold'; 
//   });
// }


// function boldText(){
// let btn = document.createElement('button');
// btn.classList.add('newBtn');
// mainArt.appendChild(btn);
// btn.addEventListener('click', changecolor);
// }

// boldText();

// h1.addEventListener('mouseover', randomNum);
// function randomNum(){
//   h1.style.fontSize = Math.floor(Math.random() * 100) + 'px';
// };

// let secondPara = mainArt.children[4];
// console.log(secondPara);

// secondPara.addEventListener('mouseover', fade);

// function fade() {
//   secondPara.style.opacity = 0;
  
// }

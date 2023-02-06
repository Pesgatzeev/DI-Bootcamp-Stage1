// 🌟 Exercise 4 : Welcome
// Instructions
// John has just signed in to your website and you want to welcome him.

// Create a Bootstrap Navbar in your HTML file.
// In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
// The function should add a div in the nabvar, displaying the name of the user and his profile picture.


// (function(usersName){
//  let div = document.createElement('div');
//  let text = document.createTextNode('');
//  div.appendChild(text);
//  let image = document.createElement('img');
//  image.src = 'https://picsum.photos/200/300';
//  div.appendChild(image);
//  let nav = document.getElementById('usersName');
//  nav.appendChild(div);
//  nav.appendChild(image);
//  div.innerHTML = (`${usersName}`)
// })('John');
// 🌟 Exercise 1 : Users
// Instructions
// <div id="container">Users:</div>
// <ul class="list">
//     <li>John</li>
//     <li>Pete</li>
// </ul>
// <ul class="list">
//     <li>David</li>
//     <li>Sarah</li>
//     <li>Dan</li>
// </ul>


// Add the code above, to your HTML file

// Using Javascript:
// Retrieve the div and console.log it
// Change the name “Pete” to “Richard”.
// Change each first name of the two <ul>'s to your name.
// Delete the <li> that contains the text node “Sarah”.

// Bonus - Using Javascript:
// Add a class called student_list to both of the <ul>'s.
// // Add the classes university and attendance to the first <ul>.

// let div = document.getElementById('container');
// console.log(div);
// let ul = document.body.children[1];
// console.log(ul);
// let changeName = ul.children[1].textContent = 'Richard';
// console.log(changeName);
// let elements = document.querySelectorAll('.list');
// console.log(elements);
// for (let elem of elements){
//   elem.children[0].textContent = 'Maksym';}

// elements[1].children[1].remove();

// ul.classList.add('student_list');
// elements[0].classList.add('attendance','univercity')
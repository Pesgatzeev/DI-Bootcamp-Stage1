// 🌟 Exercise 2 : Work With Forms
// Instructions
// Copy the code below, into a structured HTML file:

// <form>
//   <label for="fname">First name:</label><br>
//   <input type="text" id="fname" name="fname"><br>
//   <label for="lname">Last name:</label><br>
//   <input type="text" id="lname" name="lname"><br><br>
//   <input type="submit" value="Submit" id="submit">
// </form> 
// <ul class="usersAnswer"></ul>


// Retrieve the form and console.log it.

// Retrieve the inputs by their id and console.log them.

// // Retrieve the inputs by their name attribute and console.log them.

// // When the user submits the form (ie. submit event listener)
// // use event.preventDefault(), why ?
// // get the values of the input tags,
// // make sure that they are not empty,
// // create an li per input value,
// // then append them to a the <ul class="usersAnswer"></ul>, below the form.
// // The output should be :

// // <ul class="usersAnswer">
// //     <li>first name of the user</li>
// //     <li>last name of the user</li>
// // // </ul>



// let form = document.forms[0];



// form.addEventListener('submit', getInform);

// function getInform(e){
// e.preventDefault();

// let firstelement = form.elements.fname.value;
// let secondelement = form.elements.lname.value;

// let firstli = document.createElement('li');
// firstli.innerText = firstelement;
// let secondli = document.createElement('li');
// secondli.innerText = secondelement;
// let ul = document.createElement('ul');
// let body = document.body;
// body.appendChild(ul);
// ul.appendChild(firstli);
// ul.appendChild(secondli);

// if(firstelement === '' || secondelement === ''){
//   alert('You should insert information in both fields')
// } else{
//   ul === '';
// }
// };
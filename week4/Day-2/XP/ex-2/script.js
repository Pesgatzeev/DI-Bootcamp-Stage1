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
// // </ul>

// const form = document.forms[0];
// console.log(form);

// // const firstNameInpt = document.querySelector('#fnname');
// // console.log(firstNameInpt);
// // const lastNameInpt = document.querySelector('#lname');
// // console.log(lastNameInpt);

// const firstNameInpt = form.elements.fname;
// console.log(firstNameInpt);
// const lastNameInpt = form.elements.lname;
// console.log(lastNameInpt);

// form.addEventListener('submit', getData);

// function getData(evt) {
//   evt.preventDefault();
//   const getInfo = form.querySelector('input[type="text"]').value;
//   const li = document.createElement('li');
//   li.textContent = getInfo;
//   const ul = document.querySelector('usersAnswer');
//   ul.appendChild(li);
// }
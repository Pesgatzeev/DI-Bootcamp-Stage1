// Exercise 4 : My Book List
// Instructions
// Take a look at this link for help.

// The point of this challenge is to display a list of two books on your browser.

// In the body of the HTML page, create an empty div:
// <div class="listBooks"></div>
// In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
// title,
// author,
// image : a url,
// alreadyRead : which is a boolean (true or false).

// Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)
// Requirements : All the instructions below need to be coded in the js file:
// Using the DOM, render the books inside an HTML table (the HTML table must be added to the <div> created in part 1).
// For each book :
// You have to display the book’s title and the book’s author.
// Example: HarryPotter written by JKRolling.
// The width of the image has to be set to 100px.
// If the book is already read. Set the color of the book’s details to red.

// let allBooks = [];
  
// let book1={
//     title: 'War and Peace',
//     author: 'Lev Tolstoy',
//     image: 'https://picsum.photos/200',
//     alreadyRead: true,
// };

// let book2={
//     title:'Harry Potter',
//     author: 'J.K. Rowling',
//     image: 'https://picsum.photos/200',
//     alreadyRead:true,
// };
// allBooks.push(book1, book2);
// console.log(allBooks);

// const table = document.createElement('table')
// table.innerHTML = `
// <thead>
// <tr>
// <th colspan="3"> My book list</th>
// </tr>
// </thead>
// <tbody>
// <tr>
// <td>${book1.title} written by ${book1.author}</td>
// <td> 
// <img src="${book1.image}"/>

// </td>
// <td> Already read ${book1.alreadyRead}</td>
// </tr>

// <tr>
// <td>${book2.title} written by ${book2.author}</td>
// <td> 
// <img src="${book2.image}"/>

// </td>
// <td> Already read ${book2.alreadyRead}</td>
// </tr>

// </tbody>
// `
// const booklist = document.querySelector('.listBooks');
// booklist.appendChild(table);
// // Exercise 3 : Create A Shopping List
// // Instructions
// // For this exercise, you need to work on your js file.
// // The one and only element on your HTML file should be:

// // <div id="root"></div>
// // In your js file:
// // Create an empty array. For example: let shoppingList=[].
// // Create a form containing : a text input field and an “AddItem” button. Add this form to the DOM.
// // Type what you need to buy in the text input field, then add the new item to the array as soon as you click on the “AddItem” button (Hint: create a function named addItem()).
// // Add a “ClearAll” button to the DOM, that when clicked on, should call the clearAll() function (see below).
// // Create a function named clearAll() that should clear out all the items in the shopping list.

// let shoppingList=[];

// let form = document.createElement('form');
// let div = document.getElementById('root');
// let textInput = document.createElement('input');
// let text = document.createTextNode('');
// textInput.appendChild(text);
// let btn = document.createElement('button');
// btn.innerHTML = "AddItem"
// form.appendChild(textInput);
// form.appendChild(btn);
// div.appendChild(form);
// btn.style.height = '30px';
// btn.style.width = '150px';  
// btn.style.backgroundColor = 'pink';
// btn.style.display = 'block';
// btn.style.marginTop = '10px';
// textInput.style.padding = " 5px 5px"

// let btn2 = document.createElement('button');
// btn2.innerHTML = "Reset"
// form.appendChild(btn2);
// btn2.style.height = '30px';
// btn2.style.width = '150px';  
// btn2.style.backgroundColor = 'pink';
// btn2.style.display = 'block';
// btn2.style.marginTop = '10px';
// btn2.name= 'delete';
// btn.name = 'update';



// form.addEventListener('submit', deleteOrsubmit);




// function deleteOrsubmit(){
//   e.preventDefault();
//  if(btn){
//   addItemToArray();
//  } else if(btn2){
//   removeFromArray();
//  }
// };


// function addItemToArray(e) {
//   e.preventDefault();
//   let value = form.elements[0].value;
//   console.log(value);
//   shoppingList.push(`${value}`);
//   console.log(shoppingList);
// }

// // addItemToArray()


// function removeFromArray(e) {
//   e.preventDefault();
//   let value = form.elements[0].value;
//   console.pop(value);
//   shoppingList.unshift(`${value}`);
//   // console.log(shoppingList);
// }



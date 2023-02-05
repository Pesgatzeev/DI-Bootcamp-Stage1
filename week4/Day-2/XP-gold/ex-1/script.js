// // Exercise 1 : Select A Kind Of Music
// // Instructions
// // <select id="genres">
// //   <option value="rock">Rock</option>
// //   <option value="blues" selected>Blues</option>
// // </select>


// // Display the value of the selected option.

// // Add an additional option to the select tag:
// // <option value="classic">Classic</option>

// // The newly added option should be selected by default.

// let optionTable = document.getElementById('genres');
// let selectedElement = optionTable.value;
// console.log(selectedElement); 

// let option = document.createElement('option');
// option.value = "classic";
// let text = document.createTextNode('Classic');
// option.appendChild(text);
// optionTable.appendChild(option);
// option.selected = 'true';
// console.log(optionTable);
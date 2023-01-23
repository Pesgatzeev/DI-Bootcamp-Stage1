// Exercise 1 : The World Translator
// Instructions
// Hint: Use Switch Case

// Ask the user which language they speak.

// Convert the user’s answer to lowercase, so that all the user’s inputs will be accepted in the if statement. For example “english” or “English” or “ENGlish” ect…”

// Create a few conditions :
// If the user speaks French : display “Bonjour”
// If the user speaks English : display “Hello”
// If the user speaks Hebrew : display “Shalom”
// If the user doesn’t speak any of these 3 languages: display ‘01110011 01101111 01110010 01110010 01111001’


// let userQue = prompt('Which language do you speak?').toLowerCase();
// switch(userQue){
//   case 'french': alert('Bounjour');
//     break;
//   case 'english': alert('Hello');
//     break;
//   case 'hebrew': alert('Shalom');
//     break;
//     default:
//       alert('1000009 1000009 100009 100009')
// }

// Exercise 2 : The Grade Assigner
// Instructions
// Ask the user for their grade.

// If the grade is bigger than 90, console.log “A”

// If the grade is between 80 and 90 (included), console.log “B”
// If the grade is between 70(included) and 80 (included), console.log “C”
// If the grade is lower than 70, console.log “D”

// const grade = +prompt('What is your grade?');
// if(grade>90){
//   console.log('A');
// } else if (grade > 80 && grade < 90){
//   console.log('B');
// } else if( grade >= 70 && grade <= 80){
//   console.log('C');
// } else if (grade < 70){
//   console.log('D')
// };


// Exercise 3 : Verbing
// Instructions
// Prompt the user for a string. It must be a verb.
// If the length of the string is at least 3 and the string doesn’t end with “ing”, add ‘ing’ to the end of the string.
// If the length of the string is at least 3 and the string ends with “ing” add “ly” to it’s end.
// If the length of the string is less than 3, leave it unchanged.
// Example:

//   The string is : "swim" , your program should console.log : "swimming"
//   The string is : "swimming", your program should console.log : "swimmingly"
//   The string is : "go" your program should console.log : "go"


  // const verb = prompt('Pls write one veb');
  // if (verb.length >= 3 && verb.slice(-3)!=='ing'){
  //   console.log(`${verb}ing`);
  // } else if (verb.length >= 3 && verb.slice(-3) =='ing'){
  //   console.log(`${verb}ly`);
  // }else{ console.log(verb)
  // };
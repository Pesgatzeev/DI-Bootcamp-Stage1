// Exercise 1 : Checking The BMI
// Instructions
// Hint:
// - You must use functions to complete this exercise, to do so take a look at tomorrow’s lesson.

// Create two objects, each object should hold a person’s details. Here are the details:
// FullName
// Mass
// Height

// Each object should also have a key which value is a function (ie. A method), that calculates the Body Mass Index (BMI) of each person

// Outside of the objects, create a JS function that compares the BMI of both objects.

// Display the name of the person who has the largest BMI.


// let firstP ={

// FullName: "Kapko Maksym",
// Mass: "100",
// Height: 1.8,
// bmicalc: function(){
//  let bmi = this.Mass * this.Height;
//  return bmi;
// }
// }


// let secondP ={

// FullName: "Kapko Maksym",
// Mass: "150",
// Height: 2,
// bmicalc: function(){
//  let bmi = this.Mass * this.Height;
//  return bmi;
// }
// }

// function compareBmi(){
//   if (firstP.bmicalc()> secondP.bmicalc()){
//     console.log(firstP.FullName);
//   } else{
//     console.log(secondP.FullName);
//   }
// }
// compareBmi()


// Exercise 2 : Grade Average
// Instructions
// Hint:
// - This Exercise is trickier then the others. You have to think about its structure before you start coding.
// - You must use functions to complete this exercise, to do so take a look at tomorrow’s lesson.

// In this exercise we will be creating a function which takes an array of grades as an argument and will console.log the average.

// Create a function called findAvg(gradesList) that takes an argument called gradesList.

// Your function must calculate and console.log the average.

// If the average is above 65 let the user know they passed

// If the average is below 65 let the user know they failed and must repeat the course.
// Bonus Try and split parts 1,2 and 3,4 of this exercise to two separate functions.
// Hint One function must call the other.


// const gradesList = [40, 65, 73, 85, 10, 25];

// function findAvg(gradesList){

//   let sum = 0;
//   for (let i = 0; i < gradesList.length; i++){
//   sum += gradesList[i];
// }
// // console.log(sum);
// let averagenum = sum/ gradesList.length;

// console.log(averagenum); 

// if(averagenum > 65){
//   alert('Congrats, you pass')
// } else{
//   alert('Congrats, you failed')
// }

// }
// findAvg(gradesList);


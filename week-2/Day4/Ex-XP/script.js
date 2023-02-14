// // 

// 🌟 Exercise 6 : Vacations Costs
// Instructions
// Let’s create functions that calculate your vacation’s costs:

// Define a function called hotelCost().
// It should ask the user for the number of nights they would like to stay in the hotel.
// If the user doesn’t answer or if the answer is not a number, ask again.
// The hotel costs $140 per night. The function should return the total price of the hotel.

// Define a function called planeRideCost().
// It should ask the user for their destination.
// If the user doesn’t answer or if the answer is not a string, ask again.
// The function should return a different price depending on the location.
// “London”: 183$
// “Paris” : 220$
// All other destination : 300$

// Define a function called rentalCarCost().
// It should ask the user for the number of days they would like to rent the car.
// If the user doesn’t answer or if the answer is not a number, ask again.
// Calculate the cost to rent the car. The car costs $40 everyday.
// If the user rents a car for more than 10 days, they get a 5% discount.
// The function should return the total price of the car rental.

// Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
// Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
// Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().

// Call the function totalVacationCost()

// Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. You need to change the 3 first functions, accordingly.


// function hotelCost(){
//   const oneNightCost = 140;
//   const numberNights = +prompt("How many nights you would like tostay?");
//   if(numberNights === "" || numberNights === NaN){
//   const numberNights = +prompt("How many nights you would like tostay?");
//   }
//   let totalNights = oneNightCost * numberNights

//   return totalNights
// }

// // hotelCost()

// //  function planeRideCost(){

// //   const userDestination = prompt('what is yours destination'?){
// //     if (userDestination === "" || userDestination!== String){
// //       userDestination = prompt('what is yours destination'?)}
      
// //       else if (userDestination === 'Paris')
// //       return 'Paris: 220'
// //       else if (userDestination === 'Paris')
// //       return 'Paris: 220'
// //   } else 
// //   return "All other destination : 300"
// // }



// function rentalCarCost(){
//   let oneDayrent = 40;
// const numberOfDays = +prompt('How many days you would like to rent a car');
// if (numberOfDays === "" || numberOfDays ===NaN){
//   numberOfDays = +prompt('How many days you would like to rent a car')
// } else if (numberOfDays > 10){
//   oneDayrent = oneDayrent - 5
// }

// const totalRentprice = oneDayrent * numberOfDays;
// return totalRentprice

// }
// rentalCarCost();


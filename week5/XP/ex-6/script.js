// Exercise 6 : Bank Details
// Instructions
// In this exercise, you have to decide which type of variables you have to use (ie. let or const):

// Create a global variable called bankAmount which value is the amount of money currently in your account.
// Create a variable that saves the % amount of VAT (In Israel, it’s 17%).
// Create an array with all your monthly expenses, both positive and negative (money made and money spent).
// Example : const details = ["+200", "-100", "+146", "+167", "-2900"]
// Create a program that modifies the expenses (ie. the positive AND the negative expenses) so that they will include taxes (multiply each expense by the VAT).
// Display your current bankAccount standing at the end of the month.

// const details = ["+200", "-100", "+146", "+167", "-2900"]
// const currentbankAmount = addvat(details);

// console.log(currentBankAccount);

// function addvat(expenses){
//   let total = 0;
//   expenses.forEach((expense) => {
//     const numExpense = Number(expense);
//     const expenseWithVat = numExpense * (1 + vatRate);
//     total = total + expenseWithVat;
//   });
//   return total
// }

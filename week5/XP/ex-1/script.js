// Instructions
// Analyse the code below, and predict what will be the value of a in all the following functions.
// Write your prediction as comments in a js file. Explain your predictions.
// // #1
// function funcOne() {
//     let a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }
// // #1.1 - run in the console:
// funcOne()
// // the result will be a =3, beause we reassign variable a below;
// // #1.2 What will happen if the variable is declared 
// // with const instead of let ?
// // It will give us an error, because it is prohibited to reassign cons variables//
// // 
// //#2
// let a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

// // #2.1 - run in the console:
// funcThree() // will give us 0 because function Two still does not invoked;
// funcTwo() // will give us 5
// funcThree()// will give us 5, because function two reassign the variable a value to 5;
// // #2.2 What will happen if the variable is declared 
// // with const instead of let ?


// //#3
// function funcFour() {
//     window.a = "hello";
// }
// //undefined

// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }
// //undefined
// // #3.1 - run in the console:
// funcFour()
// funcFive()

// //#4
// let a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }

// //inside the funcSix function test
// // #4.1 - run in the console:
// funcSix()
// // #4.2 What will happen if the variable is declared 
// // with const instead of let ? // Erro it is impossible to reassign const

// //#5
// let a = 2;
// if (true) {
//     let a = 5;
//     alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);

// // #5.1 - run the code in the console

// in the block 5;
// outside block 2;
// // #5.2 What will happen if the variable is declared 
// // with const instead of let ?
// Error a is alredy decleared


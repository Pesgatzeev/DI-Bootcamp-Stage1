// Skip to content
// Search or jump toโฆ
// Pull requests
// Issues
// Codespaces
// Marketplace
// Explore
 
// @Pesgatzeev 
// shlonimsky
// /
// DI-bootcamp
// Public
// Fork your own copy of shlonimsky/DI-bootcamp
// Code
// Issues
// Pull requests
// Actions
// Projects
// Security
// Insights
// DI-bootcamp/Week4/Day4/ExercisesXP/script.js /
// @shlonimsky
// shlonimsky xp is done
// Latest commit f97e017 13 hours ago
//  History
//  1 contributor
// 138 lines (119 sloc)  4.17 KB

// // ๐ Exercise 1 : Location
// // Analyze the code below. What will be the output?
// const person = {
//     name: 'John Doe',
//     age: 25,
//     location: {
//         country: 'Canada',
//         city: 'Vancouver',
//         coordinates: [49.2827, -123.1207]
//     }
// }

// const {name, location: {country, city, coordinates: [lat, lng]}} = person;

// console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
// // I am John Doe from Canada, Vancouver. Latitude(49.2827), Longitude(-123.1207)


// // ๐ Exercise 2: Display Student Info
// function displayStudentInfo(objUser){
// const {first,last}=objUser;
//  console.log(`Your full name is ${first} ${last}`);
// }
// displayStudentInfo({first: 'Elie', last:'Schoppik'})
// // Using the code above, destructure the parameter inside the function and return a string as the example seen below:
// // //output : 'Your full name is Elie Schoppik'


// // ๐ Exercise 3: User & Id
// // Using this object 
// const users = { user1: 18273, user2: 92833, user3: 90315 }
// // Using methods taught in class, turn the users object into an array:
// // Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// // FYI : The number is their ID number.
// const usersArr = Object.entries(users);
// console.log(usersArr);
// // Modify the outcome of part 1, by multipling the userโs ID by 2.
// // Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
// const newArr = usersArr.map(arr => {return [arr[0],arr[1]*2]})
// console.log(newArr)


// // Exercise 4 : Person Class
// // Analyze the code below. What will be the output?
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }

// const member = new Person('John');
// console.log(typeof member);
// // object


// // ๐ Exercise 5 : Dog Class
// // Instructions
// // Using the Dog class below:
// class Dog {
//     constructor(name) {
//       this.name = name;
//     }
//   };
// //   Analyze the options below. Which constructor will successfully extend the Dog class?
//   // 1
// //   class Labrador extends Dog {
// //     constructor(name, size) {
// //       this.size = size;
// //     }}
// //  super(name) is missed
//     // 2
//     class Labrador extends Dog {
//     constructor(name, size) {
//       super(name);
//       this.size = size;
//     }
//   }; 
// //   will work

//     // 3
// // class Labrador extends Dog {
// //     constructor(size) {
// //       super(name);
// //       this.size = size;
// //     }
// //   }; 
// //   missed name in constructor(name, size){}
  
//     // 4
// //   class Labrador extends Dog {
// //     constructor(name, size) {
// //       this.name = name;
// //       this.size = size;
// //     }
// //   };
// //   missed a refference to constuctor of class Dog


// // ๐ Exercise 6 : Challenges
// // Evaluate these (ie True or False)
// [2] === [2] //true
// // {} === {} //false but the real output is Uncaught SyntaxError: Unexpected token '==='

// // What is, for each object below, the value of the property number and why?

// const object1 = { number: 5 }; 
// const object2 = object1; // { number: 5 }
// const object3 = object2; // { number: 5 }
// const object4 = { number: 5}; //{ number: 5 }

// object1.number = 4; //{ number: 4 }
// console.log(object2.number) // 4
// console.log(object3.number) // 4
// console.log(object4.number) // 5

// // Create a class Animal with the attributes name, type and color. The type is the animal type, for example: dog, cat, dolphin ect โฆ
// class Animal {
//     constructor(name,type="dog",color){
//         this.name=name;
//         this.type = type;
//         this.color = color;
//     }
// }
// // Create a class Mamal that extends from the Animal class. Inside the class, add a method called sound(). This method takes 
// // a parameter: the sound the animal makes, and returns the details of the animal (name, type and color) as well as the sound it makes.
// class Mamal extends Animal {
//     constructor(name,type,color){
//         super(name,type,color)
//     }
//     sound(sound){
//         return console.log(`${sound}... I'm a ${this.type}, named ${this.name} and I'm ${this.color}`)
//     }
// }
// // Create a farmerCow object that is an instance of the class Mamal. The object accepts a name, a type and a color and calls the 
// // sound method that โmoosโ her information.
// // For example: Moooo I'm a cow, named Lily and I'm brown and white
// const farmerCow = new Mamal("Lily","cow","brown and white")
// farmerCow.sound("mooooo")

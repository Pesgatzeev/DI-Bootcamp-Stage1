const gameInfo = [
 {
   username: "john",
   team: "red",
   score: 5,
   items: ["ball", "book", "pen"]
 },
 {
   username: "becky",
   team: "blue",
   score: 10,
   items: ["tape", "backpack", "pen"]
 },
 {
   username: "susy",
   team: "red",
   score: 55,
   items: ["ball", "eraser", "pen"]
 },
 {
   username: "tyson",
   team: "green",
   score: 1,
   items: ["book", "pen"]
 },
];
// Create an array using forEach that contains all the usernames from the gameInfo array, add an exclamation point (ie. “!”) to the end of every username.
// The new array should look like this :
// const usernames = ["john!", "becky!", "susy!", "tyson!"]


// 2. Create an array using forEach that contains the usernames of all players with a score bigger than 5.
// The new array should look like this :

// const winners = ["becky", "susy"]


// 3. Find and display the total score of the users. (Hint: The total score is 71)



// const usernames = getusernamesFromArray(gameInfo)
// console.log(usernames);

// function getusernamesFromArray(values){
//   let usernames = [];
// for( let value of values){
//   usernames.push(value.username+ '!') 
// }
// console.log(usernames)
// }

// let users = gameInfo.map((element)=> element.username + "!");
// console.log(users);


// let players = getusernames(gameInfo);

// function getusernames(users){
//   let players =[];
//   users.forEach((user) => {
//     if(user.score > 5){
//       players.push(user.score)
//     }
    
//   });
//   console.log(players)
// }

// // let users = gameInfo.filter((element) => element.score > 5 );
// // console.log(users);

// let score = totalscore(gameInfo);

// function totalscore(numers){
//   let total = 0;
// numers.forEach((number) => {
//   total += number.score
// });
// console.log(total);
// }
const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};

// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement
var team = players;
/var team1 = players;
var team1 = {}; // the new empty object

// let's copy all user properties into it
for (let key in players) {
  team1[key] = players[key];
}
var cap1 = Object.assign({}, players);

window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;

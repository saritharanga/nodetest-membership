//var utility = require("./lib/utility");

//utility.sayHi();

var user = require("./lib/user");
var otherUser = require("./lib/user");

console.log(user.getName());
console.log(otherUser.getName());

user.setName("Steve");
console.log(user.getName());
console.log(otherUser.getName());

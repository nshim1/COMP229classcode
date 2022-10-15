// Default value of a parameter
function add(x, y = 0) {
  return x + y;
}
document.write(add(10) + "<br>");
document.write(add(10, 2));

// Rest
function userFriends(user, ...friends) {
  console.log(user + " has " + friends.length + " friends. They are:");
  friends.map((n) => console.log(n));
}
userFriends("John", "Bob", "Alice", "Joanna");

// Spread
function userTopFriends(firstFriend, secondFriend, thirdFriends) {
  console.log(firstFriend);
  console.log(secondFriend);
  console.log(thirdFriends);
}
userTopFriends(...["Alice", "Bob", "Michelle", "John"]);
//"..." <- spread
// last parameter is ignored without error
// spread 없으면 firstFriend에 전체 다 들어감

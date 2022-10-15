var hello;

//Arrow Function
hello = () => {
  document.getElementById("demo").innerHTML += "Hello 1!";
};

//Anounymous function
var hello2 = function () {
  document.getElementById("demo").innerHTML += "Hello 2!";
};

//Named Function
function hello3() {
  document.getElementById("demo").innerHTML += "Hello 3!";
}
//The window object calls the function
window.addEventListener("load", hello);

//A button object calls the function:
document.getElementById("btn1").addEventListener("click", function () {
  document.getElementById("demo").innerHTML += "Hello 1!";
});

document.getElementById("btn2").addEventListener("click", () => {
  document.getElementById("demo").innerHTML += "Hello2!";
});

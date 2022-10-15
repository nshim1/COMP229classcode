function parent() {
  const message = "Hello World";

  function child() {
    alert(message);
  }

  console.log("Pass here");
  return child; // parent function return child function
}

const childFN = parent();
childFN();

// Snippet

let a = 10;
const x = (function() {
  a = 12;
  return function() {
    alert(a);
  };
})();

x();    // When we call x function the variable a will take the value 12 and we will get an alert message with the value of a that it is 12
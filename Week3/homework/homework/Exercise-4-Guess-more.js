// Snippet
const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}
f1(x);
console.log(x);   // x is declared is a constant so its value can not be changed and the function f1 created a new variable that it take the same value of x and applied the changes on it so console.log(x) will be 9

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y);   // y is an object and x is a key of y so the function f2 can reassign the value of x key. In this case console.log(y) will be 10
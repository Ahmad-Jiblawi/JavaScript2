const myNumbers = [1, 2, 3, 4];
const newNumbers = myNumbers.map(number => {if (number %2 === 0) {return number *2;}
return number});

console.log(newNumbers.filter(number => number % 2 === 0));
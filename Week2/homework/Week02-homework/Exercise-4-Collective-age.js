const hackYourFutureMembers = [
  { name: 'Wouter', age: 33 },
  { name: 'Federico', age: 32 },
  { name: 'Noer', age: 27 },
  { name: 'Tjebbe', age: 22 },
];

const agesArray = [];
let sumOfAges = 0;

function combinedAge(ages) {
  
  agesArray.push(ages.age);
  sumOfAges = sumOfAges + ages.age;
  
}

function getAges(agesOfMembers) {
  
  agesOfMembers.map(combinedAge);
  console.log('The collective age of the HYF team is: ' + sumOfAges);
}

getAges(hackYourFutureMembers);

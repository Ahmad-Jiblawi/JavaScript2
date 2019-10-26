function sayThree(number) {
  console.log(number + ' is divisible by 3');
}

function sayFive(number) {
  console.log(number + ' is divisible by 5');
}

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];

  for (let i = 0; i <= stopIndex - startIndex; i++)
    numbers[i] = startIndex + i;

  console.log('The lottery numbers are: ' + numbers);

  for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0) {
      threeCallback(numbers[i]);
      fiveCallback(numbers[i]);
    }
    
    else if (numbers[i] % 3 === 0) threeCallback(numbers[i])
    
    else if (numbers[i] % 5 === 0) fiveCallback(numbers[i])

  }

}

threeFive(10, 15, sayThree, sayFive);

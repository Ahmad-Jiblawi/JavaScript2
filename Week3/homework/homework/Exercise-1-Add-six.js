function createBase(baseNumber) {

  function secondNumber(addedNumber) {

    return  baseNumber * 10 + addedNumber;
  }

  return secondNumber;
}

const addSix = createBase(9);

console.log(addSix(8));

const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];

function removeDuplicates(arrayLetters) {

  const newLetters = [];

  for (let i = 0; i <arrayLetters.length; i++) {
    if(newLetters.indexOf(arrayLetters[i]) === -1)
    newLetters.push(arrayLetters[i])
  }

  console.log(newLetters);
}

removeDuplicates(letters);
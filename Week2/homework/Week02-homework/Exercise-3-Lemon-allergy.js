const fruitBasket = ['Apple', 'Lemon', 'Grapefruit', 'Lemon', 'Banana', 'Watermelon', 'Lemon'];

function disposeLemon(fruits) {
  const newFruitsBasket = [];
  fruits.filter(fruitCheck => {if(fruitCheck !== 'Lemon') newFruitsBasket.push(fruitCheck)});
  console.log("My mom bought me a fruit basket, containing " + newFruitsBasket + " !");
}

disposeLemon(fruitBasket);
const myHobbies = [
  'Meditation',
  'Reading',
  'Programming',
  'Hanging out with friends',
  'Going to the gym',
];
const myHobbiesList = document.querySelector('#hobbies-list');

function hobbiesOrder(hobbiesList) {
  hobbiesList.map(list => {
    const newItem = document.createElement('li');
    newItem.innerHTML = list;
    myHobbiesList.appendChild(newItem);
  })
}

hobbiesOrder(myHobbies);


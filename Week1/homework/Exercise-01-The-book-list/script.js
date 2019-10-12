const books = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    url: 'http://prodimage.images-bn.com/pimages/9780465050659_p0_v5_s1200x630.jpg',
    alreadyRead: false,
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    url: 'https://s.s-bol.com/imgbase0/imagebase3/extralarge/FC/6/3/9/2/9200000110942936.jpg',
    alreadyRead: true,
  },
  {
    title: 'War and Peace',
    author: 'Leo Tolstoy',
    url: 'https://images-na.ssl-images-amazon.com/images/I/A1aDb5U5myL.jpg',
    alreadyRead: true,
  },
];

const myBooksContainer = document.getElementById('my-books-container');

const myList = document.createElement('ul');
myBooksContainer.appendChild(myList);
myList.setAttribute('class', 'my-favorite-books');
myList.style.listStyle = 'none';

for (let i = 0; i < books.length; i++) {
  const myItem = document.createElement('li');
  myList.appendChild(myItem);
  const myBook = document.createElement('p');
  myBook.textContent = books[i].title + ' Created By : ' + books[i].author;
  myItem.appendChild(myBook);
  const bookCover = document.createElement('img');
  bookCover.setAttribute('src', books[i].url);
  bookCover.setAttribute('class', 'book-cover');
  myItem.appendChild(bookCover);
  if (books[i].alreadyRead === true) {
    myBook.style.color = 'green';
  } else {
    myBook.style.color = 'red';
  }
}

// function bookDetails(book) {
//   const myBook = document.createElement('p');
//   myBook.innerHTML = book;
//   document.body.appendChild(myBook);
// }

// console.log(books[1]);

// bookDetails(books[0]);

// for (let i = 0; i < books.length; i++) {
//   const myBook = document.createElement('p');
//   const bookDetails = books[i].length;

//   for (let z = 0; z < bookDetails - 1; z++) {
//     const myBook = document.createElement('p');
//     myBook.textContent = books[i][z];
//     console.log(body.appendChild(myBook.innerHTML));
//   }
// }

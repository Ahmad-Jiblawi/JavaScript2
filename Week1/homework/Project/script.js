const favoriteQuotes = [
  {
    quote: 'Always remember that you are absolutely unique. Just like everyone else.',
    author: 'Margaret Mead',
  },

  {
    quote: 'A single rose can be my garden... a single friend, my world.',
    author: 'Leo Buscaglia',
  },

  {
    quote: "You don't choose your family. They are God's gift to you, as you are to them.",
    author: 'Desmond Tutu',
  },

  {
    quote: 'Change your thoughts and you change your world.',
    author: 'Norman Vincent Peale',
  },

  {
    quote: 'Do all things with love.',
    author: 'Og Mandino',
  },

  {
    quote: 'Where there is love there is life.',
    author: 'Mahatma Gandhi',
  },

  {
    quote: 'It is during our darkest moments that we must focus to see the light.',
    author: 'Aristotle',
  },

  {
    quote:
      'Keep love in your heart. A life without it is like a sunless garden when the flowers are dead.',
    author: 'Oscar Wilde',
  },

  {
    quote: 'Success is not final, failure is not fatal: it is the courage to continue that counts.',
    author: 'Winston Churchill',
  },
];

function getQuote() {
  const randomQuote = Math.floor(Math.random() * favoriteQuotes.length);
  const icon = document.getElementById('q-icon');
  icon.setAttribute('class', 'fa fa-quote-left');
  const dashMark = '- ';
  const quote = favoriteQuotes[randomQuote].quote;
  const author = dashMark + favoriteQuotes[randomQuote].author;
  document.getElementById('quote').innerHTML = quote;
  document.getElementById('author').innerHTML = author;
}

const newQuoteBtn = document.getElementById('quote-btn');
newQuoteBtn.addEventListener('click', getQuote);

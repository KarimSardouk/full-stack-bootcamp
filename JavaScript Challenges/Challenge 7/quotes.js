const quotesArray = [
  {
    author: 'Thomas Edison',
    content: 'As a cure for worrying, work is better than whisky.',
  },
  {
    author: 'Thomas Edison',
    content: 'Everything comes to him who hustles while he waits.',
  },
  {
    author: 'Thomas Edison',
    content: "I never did a day's work in my life.  It was all fun.",
  },
  {
    author: 'Charles Dickens',
    content:
      'I do not know the American gentleman, god forgive me for putting two such words together.',
  },
  {
    author: 'Charles Dickens',
    content: 'We need never be ashamed of our tears.',
  },
  {
    author: 'Charles Dickens',
    content:
      'Minds, like bodies, will often fall into a pimpled, ill-conditioned state from mere excess of comfort.',
  },
  {
    author: 'Charles Dickens',
    content:
      'Train up a fig tree in the way it should go, and when you are old sit under the shade of it.',
  },
  {
    author: 'Charles Dickens',
    content:
      "Subdue your appetites, my dears, and you've conquered human nature.",
  },
  {
    author: 'Thomas Edison',
    content:
      'Faith, as well intentioned as it may be, must be built on facts, not fiction--faith in fiction is a damnable false hope.',
  },
  {
    author: 'Thomas Edison',
    content:
      'There is no expedient to which a man will not go to avoid the labor of thinking.',
  },
  {
    author: 'Charles Dickens',
    content:
      'No one is useless in this world who lightens the burdens of another.',
  },
  {
    author: 'Thomas Edison',
    content:
      "Results! Why, man, I have gotten a lot of results. I know several thousand things that won't work.",
  },
  {
    author: 'Charles Dickens',
    content:
      'Reflect on your present blessings, of which every man has many; not on your past misfortunes, of which all men have some.',
  },
  {
    author: 'Thomas Edison',
    content:
      'Opportunity is missed by most people because it is dressed in overalls and looks like work.',
  },
  {
    author: 'Thomas Edison',
    content:
      'The doctor of the future will give no medicine, but will interest her or his patients in the care of the human frame, in a proper diet, and in the cause and prevention of disease.',
  },
  {
    author: 'Thomas Edison',
    content: "We don't know a millionth of one percent about anything.",
  },
  {
    author: 'Thomas Edison',
    content:
      'If we all did the things we are capable of doing, we would literally astound ourselves.',
  },
  {
    author: 'Thomas Edison',
    content: 'To invent, you need a good imagination and a pile of junk.',
  },
  {
    author: 'Thomas Edison',
    content:
      'I never did anything worth doing by accident, nor did any of my inventions come by accident',
  },
  {
    author: 'Thomas Edison',
    content:
      "Hell, there are no rules here-- we're trying to accomplish something.",
  },
];
// Function to display quotes
function displayQuotes(quotes) {
  const quotesContainer = document.getElementById('quotes');

  // Clear the existing quotes
  quotesContainer.innerHTML = '';

  // Loop through the filtered quotes and create HTML elements
  quotes.forEach((quote) => {
    const blockquote = document.createElement('blockquote');
    blockquote.innerHTML = `
      <p>${quote.content}</p>
      <div class="author">
        &mdash;
        <cite>${quote.author}</cite>
      </div>
    `;
    quotesContainer.appendChild(blockquote);
  });
}

// Initial display of all quotes
displayQuotes(quotesArray);

// Function to filter quotes by author name
function filterQuotesByAuthor(authorName) {
  const filteredQuotes = quotesArray.filter((quote) =>
    quote.author.toLowerCase().includes(authorName.toLowerCase())
  );
  return filteredQuotes;
}

// Get references to the input field and filter button
const authorSearchInput = document.getElementById('authorSearch');
const authorSearchButton = document.getElementById('authorBtn');

// Add an event listener to the filter button
authorSearchButton.addEventListener('click', function () {
  const authorName = authorSearchInput.value.trim();
  const filteredQuotes = filterQuotesByAuthor(authorName);
  displayQuotes(filteredQuotes);
});

// Handle Enter key press in the input field
authorSearchInput.addEventListener('keyup', function (event) {
  if (event.key === 'Enter') {
    const authorName = authorSearchInput.value.trim();
    const filteredQuotes = filterQuotesByAuthor(authorName);
    displayQuotes(filteredQuotes);
  }
});
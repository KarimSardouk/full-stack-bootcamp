// Select the elements
const menuElement = document.querySelector('.menu');
const headerElement = document.querySelector('header');
const footerElement = document.querySelector('footer');

// Log the child elements of each selected element
console.log('Menu Element Children:');
console.log(menuElement.children);

console.log('Header Element Children:');
console.log(headerElement.children);

console.log('Footer Element Children:');
console.log(footerElement.children);
// Create a new <div> element
const newDiv = document.createElement('div');
newDiv.className = 'container';

// Create a new <p> element
const newParagraph = document.createElement('p');
newParagraph.textContent = 'Hello, World!';

// Append the <p> element to the <div> element
newDiv.appendChild(newParagraph);

// Append the <div> element to the document's body
document.body.appendChild(newDiv);
// Select the "container" div and the paragraph inside it
const containerDiv = document.querySelector('.container');
const paragraph = containerDiv.querySelector('p');

// Change the background color of the "container" div to blue
containerDiv.style.backgroundColor = 'blue';

// Change the text color of the paragraph to white
paragraph.style.color = 'white';

// Change the font size of the paragraph to 24px
paragraph.style.fontSize = '24px';

// Change the font family of the paragraph to "Helvetica"
paragraph.style.fontFamily = 'Helvetica';

// Add a border to the paragraph
paragraph.style.border = '1px solid black';

// Change the style of heading tags (h1, h2, h3) to italic
const headings = document.querySelectorAll('h1, h2, h3');
headings.forEach((heading) => {
    heading.style.fontStyle = 'italic';
});

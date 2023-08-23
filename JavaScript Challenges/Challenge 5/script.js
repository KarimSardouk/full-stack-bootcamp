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
//Step 2: Event Handling
// Create a new button element
const button = document.createElement('button');
button.textContent = 'Hover Me';

// Add the button to the document body
document.body.appendChild(button);

// Function to change the button's color when hovering
function changeColorOnHover() {
    button.style.backgroundColor = 'red'; // Change the color to red (you can use any color you like)
}

// Function to revert the button's color when the mouse leaves
function revertColorOnLeave() {
    button.style.backgroundColor = ''; // Revert to the default color (empty string)
}

// Add event listeners to the button
button.addEventListener('mouseenter', changeColorOnHover);
button.addEventListener('mouseleave', revertColorOnLeave);
function mouseOver() {
    document.getElementById("demo").style.color = "red";
}

function mouseOut() {
    document.getElementById("demo").style.color = "black";
}
//Event delegation
// Select the container div by its id
const buttonContainer = document.getElementById('buttonContainer');

// Add a click event listener to the container
buttonContainer.addEventListener('click', function (event) {
    // Check if the clicked element is a button
    if (event.target.tagName === 'BUTTON') {
        // Log the text content of the clicked button
        console.log('Clicked button text:', event.target.textContent);
    }
});
const form = document.getElementById('myForm');

// Add a submit event listener to the form
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Access the form fields and log their values
    const firstName = document.getElementById('fname').value;
    const email = document.getElementById('email').value;

    // Log the form data
    console.log('First Name:', firstName);
    console.log('Email:', email);
});
//Step 3: Advanced DOM Manipulations
//DOM Cloning
// Select the original div by its id
const originalDiv = document.getElementById('original');

// Clone the div element (including its children)
const clonedDiv = originalDiv.cloneNode(true);

// Change the text of the h1 element inside the cloned div
const clonedH1 = clonedDiv.querySelector('h1');
document.addEventListener("DOMContentLoaded", function () {
    // Your code here
    clonedH1.textContent = 'Cloned';
});


// Append the cloned div to the body of the document
document.body.appendChild(clonedDiv);
document.getElementById("karim").innerHTML = "New text!";
// JavaScript to handle the button click event
document.getElementById("clone-btn").addEventListener("click", function () {
    var cloneDiv = document.getElementById("original").cloneNode(true); // Clone the original div
    cloneDiv.classList.toggle("hidden"); // Toggle the 'hidden' class to show/hide the cloned div

    // Check if the cloned div is hidden and needs to be added, or if it's shown and needs to be removed
    if (cloneDiv.classList.contains("hidden")) {
        // If hidden, add it to the document
        document.body.appendChild(cloneDiv);
    } else {
        // If shown, remove it from the document
        cloneDiv.remove();
    }
});
document.addEventListener("DOMContentLoaded", function () {
    var cloneButton = document.getElementById("clone-btn");
    var clonedDiv = document.getElementById("original");

    cloneButton.addEventListener("click", function () {
        // Toggle the 'hidden' class to show/hide the cloned div
        if (clonedDiv.classList.contains("hidden")) {
            clonedDiv.classList.remove("hidden");
        } else {
            clonedDiv.classList.add("hidden");
        }
    });
});
// Element removal
const button1 = document.createElement("button");
button1.innerText = "Click me!";
document.body.appendChild(button1);

function removeFunction() {
    const element = document.getElementById("karimButton"); // Use the unique id here
    if (element) {
        element.remove();
    }
}

// Add an event listener to remove the header
document.getElementById("removeHeaderButton").addEventListener("click", function () {
    const header = document.querySelector("header");
    if (header) {
        header.remove();
    }
});
function insertElementBeforeFooter() {
    // Step 1: Create the new element
    const newElement = document.createElement("div");
  
    // Step 2: Modify the new element (add text content or any other attributes)
    newElement.innerText = "This is a new element before the footer.";
  
    // Step 3: Select the target footer element
    const footer = document.querySelector("footer");
  
    // Step 4: Insert the new element before the footer
    footer.parentNode.insertBefore(newElement, footer);
  }
  
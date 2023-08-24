//Step 1
const button1 = document.createElement('button');
button1.id = "button-id";
button1.textContent = 'This a button';
document.body.appendChild(button1);
button1.style.padding = "10px 20px"
button1.style.fontSize = "16px"
button1.style.backgroundColor = "#3498db";
button1.style.color = "#ffffff";
button1.style.border = "none";
button1.style.cursor = "pointer";
function myFunction() {
    document.getElementById('button-id').style.backgroundColor = 'red';
}
button1.addEventListener('click', myFunction);
button1.addEventListener('click', function () {
    const randomNumber = Math.floor(Math.random() * 1000) + 1;
    button1.textContent = `Clicked ${randomNumber}!`;
    button1.style.backgroundColor = 'red';
});
//Step 2 
const header1 = document.createElement('h1');
header1.id = "header-id";
header1.textContent = 'This is the first header';
document.body.appendChild(header1);
//Add border to the h1 element with the following properties:
//Width: 10px
//Style: dotted
//Color: green
header1.style.border = "10px dotted green";
//Add keydown event listeners to do the following:
//Pressing 'A': Change the background color of the h1 to red.
document.addEventListener('keydown', function (event) {
    // Check if the pressed key is the "A" key
    if (event.key === 'a' || event.key === 'A') {
        // Your custom action here
        header1.style.backgroundColor = "red";
    } else if (event.key === "s" || event.key === "S") {
        header1.style.marginRight = "10px";
    } else if (event.key === "d" || event.key === "D") {
        // Your custom action here
        const karim = document.createElement('p');
        karim.textContent = 'Key D was pressed!';
        document.body.appendChild(karim);
    } else if (event.key === "w"|| event.key==="W"){
        //Your custom action here
        header1.style.display = header1.style.display === 'none' ? 'block' : 'none';
    } else if (event.key === ' ' || event.code === 'Space') {
        const currentFontSize = parseInt(getComputedStyle(header1).fontSize) || 16;
        header1.style.fontSize = `${currentFontSize + 5}px`;
    }
    

});
//Pressing 'S': Move h1 element 10 pixels to the right.done
//Pressing 'D': Append a new paragraph with text "Key D was pressed!" to the display element.done
//Pressing 'W': Toggle the visibility of the h1 element.done
//Pressing 'Space': Enlarge the font size of h1 element's text.
//Step 3

const errorMessages = document.getElementById('errorMessages');
const successMessage = document.getElementById('successMessage');
const form = document.getElementById('registrationForm');
form.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    errorMessages.innerHTML = '';
    successMessage.innerHTML = '';

    if (!isValidEmail(email)) {
        errorMessages.innerHTML = 'Please enter a valid email address.';
    }
    else if (password !== confirmPassword) {
        errorMessages.innerHTML = 'Passwords do not match.';
    }
    else {
        successMessage.innerHTML = 'Form submitted successfully!';
    }
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

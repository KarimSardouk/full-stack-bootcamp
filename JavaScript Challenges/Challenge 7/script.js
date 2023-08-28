// Create the main container div with class "container"
const container = document.createElement('div');
container.classList.add('container');

// Create the "login__container" div
const loginContainer = document.createElement('div');
loginContainer.classList.add('login__container');

// Create the "login__signin" div
const loginSignin = document.createElement('div');
loginSignin.classList.add('login__signin');

// Create the "login__signin-now" div
const loginSigninNow = document.createElement('div');
loginSigninNow.classList.add('login__signin-now');

// Create the "h1" element
const h1 = document.createElement('h1');
h1.textContent = 'Sign up NOW!';

// Create the "h3" element
const h3 = document.createElement('h3');
h3.textContent = 'Enter your details';

// Create the "form" element
const form = document.createElement('form');

// Create the "Email" label and input field
const emailLabel = document.createElement('label');
emailLabel.textContent = 'Email';
const emailInput = document.createElement('input');
emailInput.classList.add('input-field');
emailInput.setAttribute('type', 'email');
emailInput.setAttribute('placeholder', 'Email');
emailInput.setAttribute('required', 'true');
emailLabel.appendChild(emailInput);

// Create the "Password" label and input field
const passwordLabel = document.createElement('label');
passwordLabel.textContent = 'Password';
const passwordInput = document.createElement('input');
passwordInput.classList.add('input-field');
passwordInput.setAttribute('type', 'password');
passwordInput.setAttribute('placeholder', 'Password');
passwordInput.setAttribute('required', 'true');
passwordLabel.appendChild(passwordInput);

// Create the "Confirm Password" label and input field
const cPasswordLabel = document.createElement('label');
cPasswordLabel.textContent = 'Confirm Password';
const cPasswordInput = document.createElement('input');
cPasswordInput.classList.add('input-field');
cPasswordInput.setAttribute('type', 'password');
cPasswordInput.setAttribute('placeholder', 'Confirm Password');
cPasswordInput.setAttribute('required', 'true');
cPasswordLabel.appendChild(cPasswordInput);

// Create the "Submit" button
const submitButton = document.createElement('button');
submitButton.classList.add('filled-btn');
submitButton.setAttribute('id', 'submit-btn');
submitButton.textContent = 'Submit';

// Append the elements to the "loginSigninNow" div in the correct order
loginSigninNow.appendChild(h1);
loginSigninNow.appendChild(h3);
loginSigninNow.appendChild(form);
form.appendChild(emailLabel);
form.appendChild(passwordLabel);
form.appendChild(cPasswordLabel);
form.appendChild(submitButton);

// Append the "loginSigninNow" div to the "login__signin" div
loginSignin.appendChild(loginSigninNow);

// Append the "login__signin" div to the "login__container" div
loginContainer.appendChild(loginSignin);

// Append the "login__container" div to the "container" div
container.appendChild(loginContainer);

// Append the "container" div to the body
document.body.appendChild(container);

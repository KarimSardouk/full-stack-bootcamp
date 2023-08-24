//Step 1
const button1 = document.createElement('button');
button1.id = "button-id";
button1.textContent = 'This a button';
document.body.appendChild(button1);
button1.style.padding="10px 20px"
button1.style.fontSize="16px"
button1.style.backgroundColor="#3498db";
button1.style.color="#ffffff";
button1.style.border="none";
button1.style.cursor="pointer";
function myFunction() {
    document.getElementById('button-id').style.backgroundColor = 'red';
}
button1.addEventListener('click', myFunction);
button1.addEventListener('click', function () {
    const randomNumber = Math.floor(Math.random() * 1000) + 1;
    button1.textContent = `Clicked ${randomNumber}!`;
    button1.style.backgroundColor = 'red';
});

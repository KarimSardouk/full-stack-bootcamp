var age = 22;
if (age >= 20) {
    //  block of code to be executed if condition1 is true
    console.log("You can enter this room");
} else {
    //  block of code to be executed if the condition1 is false and condition2 is false
    console.log("You cannot enter this room");
}
const expression1 = 5 > 3;
const expression2 = 10 === '10';
const expression3 = true && false;
const expression4 = !expression3;
console.log(expression1);
console.log(expression2);
console.log(expression3);
console.log(expression4);
const age1 = 25;
const hasDriverLicense = true;
const hasCar = false;
let canDrive = false;
let canRentCar = false;
let needDriver = false;

if (age1 >= 18 && hasDriverLicense) {
    canDrive = true;
    console.log(canDrive);
} else if (age1 >= 22 && hasDriverLicense && hasCar) {
    canRentCar = true;
    console.log(canRentCar);
}

if (age1 < 18 && !hasDriverLicense && hasCar) {
    needDriver = true;
}
const role = "Admin";

switch (role) {
    case "Admin":
        console.log("You have read and write access for the data.");
        break;
    case "User":
        console.log("You have only read access for the data.");
        break;
    case "Guest":
        console.log("You have no access for the data.");
        break;
    default:
        console.log("User role is not recognized.");
}




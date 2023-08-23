//Step 1: Arrays and Objects
let fiveNumbers = [11, 22, 33, 44, 77];
const personalInfo = { name1: "Karim", age: 22, height: 1.75, address: "Beirut", nationality: "Lebanese" };
//Step 2: Spread Operator
//New Array with spread
const nextThreenumbers = [1, 2, 3];
const allNumbers = [...fiveNumbers, ...nextThreenumbers];

//New Object with Spread
const additionalInfo = { occupation: "programmer", hobby: "going to the gym", education: "USJ, majored in Business Management" };
const fullInfo = { ...personalInfo, additionalInfo };

//Step 3: Destructuring
//Destructuring Arrays
const [num1, num2, num3] = fiveNumbers;
//Destructuring Objects
// Extract properties into variables
const { name1, address, nationality } = personalInfo;
console.log(personalInfo);
//Step 4: Advanced Operations

const person = {
    name: "John",
    contactInfo: {
        email: "john@example.com",
        phone: "123-456-7890"
    }
};

// Destructure properties from the nested contactInfo object in a single line
const { name, contactInfo: { email, phone } } = person;
//Rest with Destructuring
//Use the rest operator in combination with destructuring 
//to extract the first two numbers from the fiveNumbers array into individual variables 
//and the remaining numbers into a new array named restOfNumbers.
let array0 = [71, 72, 73, 74, 75];
const [array1, array2, ...restOfArray0] = array0;
console.log(array0);
const object1 = { name: "John", age: 30, city: "New York" };
const object2 = { age: 35, profession: "Engineer" };

// Merge object2 into object1, overwriting overlapping properties
const mergedObject = { ...object1, ...object2 };
console.log(mergedObject);


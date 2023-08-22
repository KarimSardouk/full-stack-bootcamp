let fiveNumbers = [11,22,33,44,77];
const personalInfo={name1:"Karim", age:22, height:1.75, location:"Beirut", nationality:"Lebanese"};
//New Array with spread
const nextThreenumbers=[1,2,3];
const allNumbers=[...fiveNumbers,...nextThreenumbers];
console.log(allNumbers);
//New Object with Spread
const additionalInfo={ occupation:"programmer", hobby:"going to the gym",education:"USJ, majored in Business Management"};
const fullInfo={...personalInfo,additionalInfo};
console.log(fullInfo);
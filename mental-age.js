const getInput = require("./get-input.js");
const age = getInput();
if (age === '--help'){
    console.log('This function returns your mental age. Please enter your age after "node mental-age.js" and a space.');
}
const ageNextYear = Number(age) + 1;
const mentalAge = age/2+3;
console.log('You are ' + age + ' years old.');
console.log("Next year you'll be " + ageNextYear + " years old.");
console.log('Your mental age is ' + mentalAge + '.');
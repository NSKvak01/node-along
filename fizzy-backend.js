/******************************
 * YOUR CODE GOES RIGHT HERE! *
 ******************************/
function fizzy (number){
  if (number%3===0 && number%5===0){
    return "FizzBuzz";
  } else if(number%3===0){
    return "Fizz";
  } else if (number%5===0){
    return "Buzz";
  } else{
    return number;
  }
}








/**********************************
 *      OUR CODE GOES BELOW.      *
 * THIS IS FOR INTERNAL USE ONLY. *
 * DO NOT ADD OR CHANGE ANYTHING! *
 **********************************/


if (typeof fizzy === "undefined") {
  fizzy = undefined;
}

module.exports = {
  fizzy,
};

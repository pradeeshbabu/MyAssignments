//Create a JavaScript function that determines if a number is positive, negative, or zero and returns a 
//corresponding string indicating the type.
function checkNumberType(num) {
    if (num > 0) {
        return "The number is positive.";
    } else if (num < 0) {
        return "The number is negative.";
    } else {
        return "The number is zero.";
    }
}
console.log(checkNumberType(50));
console.log(checkNumberType(-5));
console.log(checkNumberType(0));
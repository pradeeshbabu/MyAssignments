//var can be Redeclared and reassigned.
var companyName = "TaTa";
var companyName = "Birla";
companyName = "Infosys";
console.log(companyName);

//let can be reassigned but cannot be redeclared.
let companyLocation = "Mumbai";
//let companyLocation = "Pune"; // This will throw an error
//console.log(companyLocation);
companyLocation = "Bangalore";
console.log(companyLocation);

//const cannot be redeclared and reassigned.
const companyCEO = "N Chandrasekaran";
//const companyCEO = "A Birla"; // This will throw an error
//companyCEO = "A Birla"; // This will throw an error
console.log(companyCEO);
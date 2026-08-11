// Given a string s consisting of words and spaces, return the length of the last word in the string. 
/* Example:1 
1. Split the string into an array of words. 
2. Find the last word in the array. 
3. Calculate the length of this word.  */
let s = "Hello World"; 
let words = s.split(" "); //split the string into an array of words
let lastWord = words[1]; //to get the last word in the array 
console.log(lastWord.length); // Output: 5
/* Example:2 
1. Trim the String 
2. Split the String into Words 
3. Identify the Last Word 
4. Calculate the Length of the Last Word 
5. Return the length  */
let x = "   fly me   to   the moon  " ;
let trimmedString = x.trim(); // Trim the string
console.log(trimmedString); // Output: "fly me   to   the moon"
let wordsSplit = trimmedString.split(" "); // Split the string into words
let lastWord2 = wordsSplit[wordsSplit.length - 1]; // Identify the last word
console.log(lastWord2.length); // Output: 4
//Write a function to check if two strings are anagrams. 
/* Example:3 
1. Remove spaces and convert all letters to the same case 
2. Sort the Characters 
3. Compare Sorted Strings 
4. Return the Result */
function areAnagrams(str1, str2) {
  let sortedStr1 = str1.replace(/\s+/g, '').toLowerCase().split('').sort().join('');
  let sortedStr2 = str2.replace(/\s+/g, '').toLowerCase().split('').sort().join('');
  return sortedStr1 === sortedStr2;
}
console.log(areAnagrams("listen", "silent")); // Output: true
console.log(areAnagrams("hello", "world")); // Output: false
/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // Convert to lowercase and remove non-alphanumeric characters
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Reverse the cleaned string
  const reversedStr = cleanedStr.split('').reverse().join('');

  // Compare the original cleaned string with its reverse
  return cleanedStr === reversedStr;
}

// Example Usage
console.log(isPalindrome("Nan")); // true
console.log(isPalindrome("Hello")); // false
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("No 'x' in Nixon")); // true

module.exports = isPalindrome;

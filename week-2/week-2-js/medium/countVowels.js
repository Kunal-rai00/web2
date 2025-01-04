/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let vowelCount = 0;
    const vowels = ["a", "e", "i", "o", "u"];

    modifiedStr = str.toLowerCase().split("");
    modifiedStr.forEach((character) => {
      vowels.forEach((vowels)=>{
        if(vowels===character){
          vowelCount += 1;
        }
      })
    });
    return vowelCount
    
}

const ans = countVowels("kunal");
console.log(ans)

module.exports = countVowels;
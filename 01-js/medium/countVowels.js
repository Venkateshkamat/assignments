/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let result=0;
  let vowels = ['a','i','o','u','e'];
  str = str.toLowerCase().trim().replaceAll(' ','');

  for(let i=0; i<str.length;i++){
    if(vowels.indexOf(str[i])>-1){
      result++;
    }

  }
  return result;
}

module.exports = countVowels;
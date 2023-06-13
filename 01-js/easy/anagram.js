/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase()
  str2 = str2.toLowerCase()

  let arrStr1 = str1.split('');
  let arrStr2 = str2.split('');
  

  arrStr1.sort();
  arrStr2.sort();

  if (arrStr1.join('') === arrStr2.join('')) {
    return true;
  } else {
    return false;
  }
}

console.log(isAnagram('hey', 'hye'));
module.exports = isAnagram;

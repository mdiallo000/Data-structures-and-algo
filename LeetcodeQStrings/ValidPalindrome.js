// *A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

const ValidPalindrome = (s) => {
  // * were basically trying to see if the word can be writtten the same fowards or backwards.
  if (s.length === 0) {
    return null;
  }
  newstr = s.toLowerCase().split('');
  //  racecar or Bob
  let start = 0;
  let end = newstr.length - 1;
  while (start < end) {
    if (newstr[start] !== newstr[end]) {
      return false;
    } else {
      start++;
      end--;
    }
  }
  return true;
};

let word = 'THEBESVER guy in th world';
let wordvar = word.toLowerCase();
console.log(ValidPalindrome('racecar'));
console.log(wordvar.split(''));

// ? This is how i solved it basically a palindrome is a word written same front way and backway.

// *A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

const ValidPalindrome = (s) => {
  // * were basically trying to see if the word can be writtten the same fowards or backwards.
  if (s.length === 0) {
    return null;
  }
  // ! First half of the goal is to create a new string that only includes alpha numerical chars and lowercase as well

  // * we need to declare a variable that will hold the allowed values in a string, meaning Alphanumeric characters
  let allowedLetters = '1234567890qwertyuiopasdfghjklzxcvbnm';
  let newstr = '';
  for (let letter of s.toLowerCase()) {
    if (!allowedLetters.includes(letter)) {
      continue;
    } else {
      newstr += letter;
    }
  }

  // ! Once we have our new string that has only lowercase values then we can use two pointers to compare wethere there the same, if there not the end the loop, and as long as they are we update our pointers.

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
console.log(ValidPalindrome('racecar '));

// ? This is how i solved it basically a palindrome is a word written same front way and backway.

// *An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
// * Input: s = "anagram", t = "nagaram"
// *            Output: true
// *EX2 Input: s = "rat", t = "car"
// *           Output: false

var isAnagram = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }
  // * I generally dont like the way this question was solved since it used in-built functions that may not be available on an interview

  if (s.length === t.length) {
    let sArray = s.split('');
    let tArray = t.split('');
    // *** Above we use the split function to create an array of the string characters

    sArray.sort();
    tArray.sort();

    for (let i = 0; i < sArray.length; i++) {
      if (sArray[i] !== tArray[i]) {
        return false;
      }
    }
  }
  return true;
};

console.log(isAnagram('anm', 'man'));

const AnagramTwo = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }
  let sArray = s.split('');
  let tArray = t.split('');

  sArray.sort();
  tArray.sort();
  // ** by this step we should have very well sorted arrays that we can loop trough and check if the contain the same elements
  for (let i = 0; i < sArray.lenght; i++) {
    if (sArray[i] !== tArray[i]) {
      return false;
    }
  }
  return true;
};
console.log(AnagramTwo('cancertumor', 'certumorcan'));

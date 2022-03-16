// *** Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// ? Input: s = "leetcdoe"          Output: 0
// ? nput: s = "aabb"               Output: -1

// ** Problem Breakdown. Take the string. use a hash table put it in

// ** LeetLovecode
const UniqueChar = (str) => {
  // ** We first create a new Hash map that we will use to keep track of our keys and value

  let myMap = new Map();
  // * This loop will will iterate through each letter and put it inside of our Map
  for (let i = 0; i < str.length; i++) {
    let curr = str[i];
    // * whatever our current element is put inside the Map and make its value 1 as a default, if we have already encountered it before then increment it. So the unique character will end up only with one, will the none unique character will be > 1.
    myMap[curr] = myMap[curr] + 1 || 1;
  }
  // *here is where we retireve the element with the value of  1.
  for (let j = 0; j < str.length; j++) {
    let curr = str[j];
    if (myMap[curr] === 1) {
      return j;
    }
  }
  return -1;
};

const FirstuniqueChar = (str) => {
  // **  This method is very efficent, uses less memeory and only utitlizes built in JS fucntion. All thats need is to iterate through the entire str compare the index of the current element and checking to see if the last occurance of that index is the same. If its not then we know that letter appears again

  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return i;
    }
  }
  return -1;
};

console.log(FirstuniqueChar('leetcodelovetest'));

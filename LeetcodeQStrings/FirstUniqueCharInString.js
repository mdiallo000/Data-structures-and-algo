// *** Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// ? Input: s = "leetcdoe"          Output: 0
// ? nput: s = "aabb"               Output: -1

// ** Problem Breakdown. Take the string. use a hash table put it in

// ** LeetLovecode
const UniqueChar = (str) => {
  let myMap = new Map();

  for (let i = 0; i < str.length; i++) {
    let curr = str[i];
    myMap[curr] = myMap[curr] + 1 || 1;
  }
  for (let j = 0; j < str.length; j++) {
    if (myMap[curr] === 1) {
      return j;
    }
  }
  return -1;
};

// const TwoPointer = (str) => {
//   // ? Input: s = "lleetcdoe"
//   //               lR
//   let position = 0;
//   let left = 0;
//   let right = 1;
//   while (str.charAt(left) !== str.charAt(right)) {
//     right++;
//     position = left;
//   }
//   return position;
// };
// console.log(TwoPointer('leetcodel'));
// const HashVersion = (str) => {
//   let counter = 0;
//   let mapped = new Set();
//   for (let char of str) {
//     if (!mapped.has(char)) {
//       return char;
//     } else {
//       mapped.add(char);
//     }
//   }
// };
// console.log(HashVersion('leecode'));
// const BruteForce = (str) => {
//   counter = 0;
//   for (let i = 0; i <= str.length - 1; i++) {
//     for (let j = i + 1; j <= str.length - 1; j++) {
//       if (str[i] === str[j]) {
//         break;
//       } else {
//         return i;
//       }
//     }
//   }
//   return -1;
// };
// console.log(BruteForce('leetcodellll'));

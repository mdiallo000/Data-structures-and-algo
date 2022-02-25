// *Write a function that reverses a string. The input string is given as an array of characters s.You must do this by modifying the input array in-place with O(1) extra memory.

// ! sample input an array called s = [hello]
// ! expected output s= [olleh]
var reverseString = (s) => {
  if (s.length === 0) return 'empty array';

  let arr = [];
  for (let i = s.length - 1; i >= 0; i--) {
    arr.push(s[i]);
  }
  return arr;
};
console.log(reverseString([]));

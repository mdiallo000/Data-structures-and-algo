// *Write a function that reverses a string. The input string is given as an array of characters s.You must do this by modifying the input array in-place with O(1) extra memory.

// !? sample input an array called s = [hello]
// ? expected output s= [olleh]
var reverseString = (s) => {
  if (s.length === 0 || s === '') return undefined;

  let arr = [];
  for (let i = s.length - 1; i >= 0; i--) {
    // arr +=s[i];
    arr.push(s[i]);
  }
  console.log(typeof arr);
  return arr;
};
console.log(reverseString(['h', 'e', 'l', 'l', 'o']));

// ** The above method works but thats not the way leetcode wants you to solve the question. the most crucial part of the question is this "You must do this by modifying the input array in-place with O(1) extra memory." So we need to use a two pointer technique. Because they dont want us to create a new array in the function, the reversing must be done in place.

const TwoPointerReverseSTR = (str) => {
  // * str = 'HELLO'
  // *        p1   p2
  // * 1.Declare two pointers, one at the start one the string the other at the end
  // * 2. Swap the the element at each pointer
  // * 3. Increase pointer one, decrease the last pointer this will make them eventually meet and end the while loop
  let pointerone = 0;
  let pointertwo = str.length - 1;
  while (pointerone < pointertwo) {
    let temp = str[pointerone];
    str[pointerone] = str[pointertwo];
    str[pointertwo] = temp;
    pointerone++;
    pointertwo--;
  }
  return str;
};
console.log(TwoPointerReverseSTR(''));

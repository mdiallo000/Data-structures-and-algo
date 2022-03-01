// *** Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.You may assume that each input would have exactly one solution, and you may not use the same element twice.You can return the answer in any order.

let nums = [1, 2, 3, 4, 5, 6, 7];
// *        0 1 2 3 4 5 6
const TwoSum = (arr, target) => {
  let newArr = [];
  let islISTeMPTY;
  for (let i = 0; i <= arr.length - 1; i++) {
    islISTeMPTY = false;
    for (let j = i + 1; j <= arr.length - 1; j++) {
      if (arr[i] === target) {
        return newArr.push(i);
      }

      if (arr[i] + arr[j] === target) {
        newArr.push(i, j);
        // newArr.push("||")
        lISTNoteMPTY = true;
      }
    }
    if (!islISTeMPTY) break;
  }
  return newArr;
};
console.log(TwoSum(nums, 3));

const fast = (nums, target) => {
  const cache = {};

  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i];

    if (target - cur in cache) {
      return [i, cache[target - cur]];
    }
    cache[cur] = i;
  }

  return [];
};

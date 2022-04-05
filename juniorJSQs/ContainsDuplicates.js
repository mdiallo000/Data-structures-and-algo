//** Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.                                    Conditions we need to meet 1. the elements must be the same nums[i] === nums [j] 2. The absolute value of substracting both indices must be less than or equal to k, abs(i - j) <= k

const BruteForce = (nums, k) => {
  for (let i = 0; i <= nums.length; i++) {
    for (let j = i + 1; j <= nums.length; j++) {
      if (nums[i] == nums[j] && Math.abs(i - j) <= k) {
        return true;
      }
    }
  }
  return false;
};
nums = [1, 2, 3, 1];
k = 3;
console.log(BruteForce([1, 2, 3, 1, 2, 3], 2));

const efficent = (nums, k) =>{




}



// const TwoPointers = (nums, k) => {
//   let left = 0;
//   let right = nums.length - 1;

//   while (left <= right) {
//     if (!nums[i] == nums[j] && !Math.abs(i - j) <= k) {
//       right--;
//     } else {
//       return true;
//     }
//     left++;
//   }
//   return false;
// };
// console.log(TwoPointers());

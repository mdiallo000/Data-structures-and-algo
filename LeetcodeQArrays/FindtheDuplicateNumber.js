// ***Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

// *There is only one repeated number in nums, return this repeated number.

// *You must solve the problem without modifying the array nums and uses only constant extra space.

const OptimalFindDuplicate = (nums) => {
  let newSet = new Set();

  for (let num of nums) {
    if (!newSet.has(num)) {
      newSet.add(num);
    } else {
      return num;
    }
  }

  return false;
};

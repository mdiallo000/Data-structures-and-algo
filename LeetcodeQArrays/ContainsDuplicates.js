// *** Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
// ?    Input: nums = [1,2,3,1]
// ?   Output: true

// ?  Input: nums = [1,2,3,4]
// ?  Output: false
let listOne = [1, 2, 3, 5, 6];
let listTwo = [1, 2, 3, 2, 4];

const ContainsDuplicate = (arr) => {
  for (let i = 0; i <= arr.length - 1; i++) {
    let currentVal = arr[i];

    for (let j = i + 1; j <= arr.length - 1; i++) {
      if (currentVal === arr[j]) {
        return true;
      }
    }
  }

  return false;
};
console.log(ContainsDuplicate([1, 23, 23, 4567, 2]));

// *** The method above work but its Big O is O(N^2) which is pretty bad. A much better technique is to use the advantages that come with a Set and the fact that the Set we can check wether or not a number is already in there.

const ImprovedContainDuplicate = (arr) => {
  let mySet = new Set();

  for (let num of arr) {
    // ** If our set does not contain the number than insert into the set
    if (!mySet.has(num)) {
      mySet.add(num);
    }
    // ** If the number is already in the set than we have met the condition of the question and we can return
    else {
      return true;
    }
  }

  return false;
};

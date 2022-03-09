// ? What is merge Sort
// ** Merge Sort uses the Divide and conquer technique. It essentially brakes down a main unsorted array into smaller pieces that are sorted, and then it combines the mini sorted array into the original size.

const MergeSort = (arr) => {};

const MereArrays = (arr1, arr2) => {
  const newArr = [];
  // **  [38,42,57]      [34,56,64]
  let i = 0;
  let j = 0;
  while (j <= arr1.length - 1 && i <= arr2.length - 1) {
    if (arr1[j] < arr2[i]) {
      newArr.push(arr1[j]);
    }
  }
};

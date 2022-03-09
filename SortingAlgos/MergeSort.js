// ? What is merge Sort
// ** Merge Sort uses the Divide and conquer technique. It essentially brakes down a main unsorted array into smaller pieces that are sorted, and then it combines the mini sorted array into the original size.

const MergeSort = (arr) => {
  if (arr.length - 1 <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length - 1 / 2);
  // ** This is the right side of my array
  let left = MergeSort(arr.slice(0, mid));
  // **The right portion of our array
  let Right = MergeSort(arr.slice(mid));

  return MergeArrays(left, Right);
};

const MergeArrays = (arr1, arr2) => {
  const newArr = [];
  // **  [38,42,57]      [34,56,64]
  let i = 0;
  let j = 0;
  while (j <= arr1.length - 1 && i <= arr2.length - 1) {
    if (arr1[j] < arr2[i]) {
      newArr.push(arr1[j]);
      j++;
    }
    // *arr2[i] < arr1[j]
    if (arr1[j] > arr2[i]) {
      newArr.push(arr2[i]);
      i++;
    }
  }
  //   ** The code below basically puts any remaining elements into the array if one of them happen to be bigger than the other
  while (i <= arr2.length - 1) {
    newArr.push(arr2[i]);
    i++;
  }
  while (j <= arr1.length - 1) {
    newArr.push(arr1[j]);
    j++;
  }
  return newArr;
};

let num1 = [38, 0, 742, 57];
let num2 = [34, 56, 12, 4, 88, 64, 78, 98, 100];
console.log(MergeSort(num2));

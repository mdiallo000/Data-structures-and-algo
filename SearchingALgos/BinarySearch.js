// *** Binary Search is a Key ALgorthim whos time complexitity is O(LOGn) WHICH MEANS its quite a fast algorithim because we decrease the area we are searching for after each iteration, narrowing down where we are looking for our elements. This algo can only be applied after a list has already been sorted.

const BinarySearch = (arr, target) => {
  // * we first began by intializing a left, right and mid pointers

  let left = 0;
  let right = arr.length - 1;
  let mid;

  // ** We run the loop as long as the left pointer is greaterThAN or === to the right because we know once we pass this point then the target is definetly not in the list.

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (target === arr[mid]) {
      return mid;
    }
    if (target < arr[mid]) {
      right = mid - 1;
    }
    if (target > arr[mid]) {
      left = mid + 1;
    }
  }
  return -1;
};

let orderList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(BinarySearch(orderList));

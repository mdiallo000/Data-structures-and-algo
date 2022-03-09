// ** Whta is merge Sort

const SeletionSort = (arr) => {
  // ** the goal is to establish some type of min value, compare that min value to every subsquent element in the list, when we encounter a lower value than our og min then we update. Once we are done we can take that min value and bring it to the start of the list

  for (let i = 0; i <= arr.length - 1; i++) {
    let min = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > min) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = min;
  }
  return arr;
};
let nums = [23, 345, 2, 12, 334, 32, 5, 6, 77, 7, 0, 23];
console.log(SeletionSort(nums));

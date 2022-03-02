const InsertSort = (arr) => {
  for (let i = 1; i < arr.length - 1; i++) {
    let currentVal = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > currentVal) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currentVal;
  }
  return arr;
};
// let numser = [1,34,56,32,45]
console.log(InsertSort([34, 23, 45, 67, 32, 45, 67]));

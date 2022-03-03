const InsertSort = (arr) => {
  // ** [25, 5, 13, 17, 45]
  // **  J   Cv

  for (let i = 1; i <= arr.length - 1; i++) {
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
let numbers = [25, 5, 13, 17, 45];
console.log(InsertSort(numbers));

const Insert = (arr) => {
  for (let i = 1; i <= arr.length - 1; i++) {
    let temp = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }

  return arr;
};
console.log(Insert(numbers));

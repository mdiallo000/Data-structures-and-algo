function Selectionsort(arr) {
  let N = arr.length;
  for (let i = 0; i < N; i++) {
    let minNumber = i;
    for (let j = i + 1; j < N; j++) {
      if (arr[j] < arr[minNumber]) {
        minNumber = j;
      }
    }

    if (minNumber !== i) {
      let temp = arr[i];
      arr[i] = arr[minNumber];
      arr[minNumber] = temp;
    }
  }

  return arr;
}

const SelecSort = (arr) => {
  let min;

  for (let i = 0; i < arr.length; i++) {
    min = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] < arr[j]) {
        min = j;
      }
    }
    if (min !== i) {
      let temp = arr[min];
      arr[min] = arr[i];
      arr[i] = temp;
    }
  }

  return arr;
};

console.log(SelecSort());

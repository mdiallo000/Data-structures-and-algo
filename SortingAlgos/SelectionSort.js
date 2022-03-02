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




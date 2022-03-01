const InsertSort = (arr) => {
  for (let i = 1; i < arr.length - 1; i++) {
    let currentVal = arr[i];
    for (let j = currentVal; j > 0; j++) {
      if (currentVal < arr[j]) {
        let temp = currentVal;
        currentVal = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};

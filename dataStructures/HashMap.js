const FindHighValue = (arr) => {
  let newMax = 0;

  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > newMax) {
      newMax = arr[i];
    }
  }

  return newMax;
};

let nums = [1, 8, 98, 700, 45, 12, 56, 452, 45, 23];
console.log(FindHighValue(nums));

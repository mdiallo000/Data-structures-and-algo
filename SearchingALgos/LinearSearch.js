// * Linear Search is much more un intuitive compared to Binary search since the algo goes through each individual element until it finds the target element, hence why it is log 0(N). The lenght of time it takes increases as the number of elements we need to search through increase.
const linearSearch = (arr, target) => {
  if (arr.length === 0) {
    return undefined;
  }
  for (let i = 0; i < arr.length; i++) {
    if (target === arr[i]) return i;
  }
  return -1;
};
let orderList = [123, 221, 32, 34, 53, 6, 7, 8, 92];
console.log(linearSearch(orderList, 45));

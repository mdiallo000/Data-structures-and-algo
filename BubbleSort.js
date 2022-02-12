// ? How to swap in JavaScript
// ** you first declare a temp variable that stores the element of a particular index (2) , you then asigning the  index(2) to equal index 1, doing so will delete the lelemnt that was previosly stored at inde 2 but youre not worried since you already made a copopy in temp. The next step is to now give index 1 the element that was stored index 2 by assinging it the contents of temp. You have offical swapped the elemnts
// ** let temp =arr[2]
// *  arr[2] = arr[1]
// *  arr[1] = temp
// ! Another way of looking at it
// ? Waiter2 is holding something but he wants to exchange his plate with 1, the plates are heavy so they cannot exchange betwenn one another. So waiter 2 gives his plate to the chef
// **  chef = wiater2[chicken];
// ? Now with his empty hands waiter two can now take whatever waiter one is holdding
// ** waiter2 = waiter1[lamb];
// ? waiter 1 now takes what waiter 2 gave to the chef
// ** waiter1 = Chef
// ? The swap is finished they are both holding whatever the other was initinally
let list = [23, 2, 45, 64, 231, 31];
function BubbleSort(arr) {
  for (let i = arr.length; i >= 0; i--) {
    console.log(arr);

    for (let j = i; j < i - 1; j++)
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
  }
  return arr;
}

console.log(BubbleSort(list));

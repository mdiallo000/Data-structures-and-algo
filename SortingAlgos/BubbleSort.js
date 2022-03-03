// ? How to swap in JavaScript
// ** you first declare a temp variable that stores the element of a particular index (2) , you then asigning the  index(2) to equal index 1, doing so will delete the lelemnt that was previosly stored at inde 2 but youre not worried since you already made a copopy in temp. The next step is to now give index 1 the element that was stored index 2 by assinging it the contents of temp. You have offical swapped the elemnts
// ** let temp =arr[2]
// *  arr[2] = arr[1]
// *  arr[1] = temp
// ! Another way of looking at it
// ? Waiter2 is holding something but he wants to exchange his plate with 1, the plates are heavy so they cannot exchange betwenn one another. So waiter 2 gives his plate to the chef
// **  chef = waiter2[chicken];
// ? Now with his empty hands waiter two can now take whatever waiter one is holdding
// ** waiter2 = waiter1[lamb];
// ? waiter 1 now takes what waiter 2 gave to the chef
// ** waiter1 = Chef
// ? The swap is finished they are both holding whatever the other was initinally
// ==========================================================================================================

// ==========================================================================================================

let list = [23, 2, 45, 64, 231, 31];
// function BubbleSort(arr) {
//   // =================================================================================================
//   //? What is the point the point of bubble sort
//   //* Bubble Sort is a sorting that cause the biggest number to get pushed at the back of the list
//   //* The result is a list where the items are sorted from least to greatest
//   //? How does this get achieved?
//   //*  So we compare the numbers as we go check each time if the previous number is greater than the next number
//   //*  If it is we swap.
//   // =================================================================================================

//   for (let i = arr.length; i > 0; i--) {
//     for (let j = 0; j < i - 1; j++)
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//   }
//   return arr;
// }

//*  More optimized way of doing Bubble sort is to include a mechanism that will check wheter or not we have a made a swap, if we have then it remains true, if we didnt make a previous swap then we need to break out of our loop rather than continously looping for no reason. This variable essentially helps us stop the looop if we already finished sorting.

function OptimalBubbleSort(arr) {
  let DidWeSwap;
  for (let i = arr.length; i > 0; i--) {
    // ** at the start of the loop, DidWeSwap will start true, if we do complete a swap we turn the variable to false so that once it reaches the if condition then we wont break out. But if we fail to swap then, once we reach if(DidWeSwap) it will be true and we can breaK out of the loop and not waist time.
    WeDidNotSwap = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        WedidNotSwap = false;
      }

      if (DidWeSwap) break;
    }
  }

  return arr;
}

// * The Big O of Bubble Sort is N2 because of the double loops most of the time. You may have some edge case were is O(N) for something like this [5,1,2,3,4], since we will only compare once and then break.
let list2 = [23, 443, 223, 122, 34, 5, 4, 54, 56, 78, 54];
console.log(OptimalBubbleSort(list2));

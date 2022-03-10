// * You are given an array prices where prices[i] is the price of a given stock on the ith day.

// * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0
// **
//? Input: prices = [7,1,5,3,6,4]
//? Output: 5
//? Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
//? Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// ! I have a list prices. want to get the most profit = BP - LW. So i have to find a min
let prices = [7, 12, 1, 4, 3, 5];
// *         min            max
const maxProfit = (arr) => {
  // ! Code explanation
  // ** This is two pointer problem where we will compare the element to the rigth with the element to to the left. Since we are atttempting to find profit we need to disregard anytime our left pointer is greater than our rigth.
  // * If our left is less than our right then we can consider the result since it will result in profit. 2. we will then move the right pointer one stop and perform the same analysis again until we encounter a instance where the left value is greather than the rigth. 3. At that point we will

  let left = 0;
  let right = 1;
  let maxProfit = 0;
  let currentProfit = 0;
  while (right < arr.length) {
    if (arr[left] > arr[right]) {
      // ** If we find a price that is less than our old min then we can jump ahead to that new price and start the comparson again
      left = right;
    } else {
      currentProfit = arr[right] - arr[left];
      maxProfit = Math.max(maxProfit, currentProfit);
      right++;
    }
  }
  return maxProfit;
};
console.log(maxProfit(prices));
const BruteForce = (arr) => {
  maxP = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      maxP = Math.max(maxP, arr[j] - arr[i]);
    }
  }

  return maxP;
  // * This method will yield a time complexity of O(n^2) since we are not only iterating through the outer loop, but we also iterate through once more in our inner loop as we compare our prices.
};

console.log(maxProfit(prices));

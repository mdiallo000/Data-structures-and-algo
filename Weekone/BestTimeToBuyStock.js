// * You are given an array prices where prices[i] is the price of a given stock on the ith day.

// * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0
// **
//? Input: prices = [7,1,5,3,6,4]
//? Output: 5
//? Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
//? Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// ! I have a list prices. want to get the most profit = BP - LW. So i have to find a min
let prices = [7, 1, 5, 7, 2, 6, 8];
// *         min            max
const maxProfit = (arr) => {
  let profit = 0;
  let min = 0;
  let max = arr.length - 1;
  while (min <= max) {
    if (arr[max] - arr[min] > profit) {
      profit = arr[max] - arr[min];
    } else {
      max--;
    }

    min++;
  }
  return profit;
};
console.log(maxProfit(prices));

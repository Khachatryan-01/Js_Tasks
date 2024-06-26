let prices1 = [7, 1, 5, 3, 6, 4];
let prices2 = [7, 6, 4, 3, 1];

let maxProfit = function (prices) {
    let num = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < prices[i + 1]) {
            num += prices[i + 1] - prices[i]
        }
    }

    return num
}

console.log(maxProfit(prices1));
console.log(maxProfit(prices2));
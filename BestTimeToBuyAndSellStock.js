/*
https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
*/

var maxProfit = function(prices) {
    let buyingStockPrice = Number.MAX_SAFE_INTEGER
    let sellingStockPrice = 0

    for(let i = 0; i < prices.length; i++) {
        if(prices[i] < buyingStockPrice)
            buyingStockPrice = prices[i]
        else if(prices[i] - buyingStockPrice > sellingStockPrice)
            sellingStockPrice = prices[i] - buyingStockPrice
    }
    return sellingStockPrice
};

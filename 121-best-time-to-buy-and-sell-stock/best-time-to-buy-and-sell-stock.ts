function maxProfit(prices: number[]): number {
    let profit: number = 0;
    let minPrice: number = prices[0];

    for (let i: number = 1; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else if ((prices[i] - minPrice) > profit) {
            profit = prices[i] - minPrice;
        }
    }

    return profit;
};
function maxProfit(prices: number[]): number {
    let maxProfit: number = 0;


    for (let i: number = 1; i < prices.length; i++) {
        const buyPrice: number = prices[i - 1];

        if (buyPrice < prices[i]) maxProfit += prices[i] - buyPrice;
    }

    return maxProfit;
};
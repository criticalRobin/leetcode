function maxProfit(prices: number[]): number {
    let lowestPrice: number = prices[0];
    let maxProfit: number = 0;

    for (let i: number = 1; i < prices.length; i++) {
        const buyedPrice: number = prices[i - 1];
        lowestPrice = Math.min(lowestPrice, buyedPrice);
        maxProfit = Math.max(prices[i] - lowestPrice, maxProfit);
    }

    return maxProfit;
};
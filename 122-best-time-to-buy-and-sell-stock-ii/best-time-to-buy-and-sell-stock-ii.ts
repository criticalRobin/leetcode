function maxProfit(prices: number[]): number {
    let minPrice: number = prices[0];
    let maxProfit: number = 0;

    for (let i: number = 1; i < prices.length; i++) {
        let price: number = prices[i];
        minPrice = Math.min(minPrice, price);

        if (price - minPrice > 0) {
            maxProfit = maxProfit + (price - minPrice);
            minPrice = price;
        }
    }

    return maxProfit;
};
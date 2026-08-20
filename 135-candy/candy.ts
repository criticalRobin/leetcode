function candy(ratings: number[]): number {
    let total: number = 0;
    let candies: number[] = new Array(ratings.length).fill(1);

    for (let i: number = 1; i < ratings.length; i++) {
        if (ratings[i] > ratings[i - 1]) {
            candies[i] = candies[i - 1] + 1;
        }
    }

    for (let j: number = ratings.length - 2; j >= 0; j--) {
        if (ratings[j] > ratings[j + 1]) {
            candies[j] = Math.max(candies[j], candies[j + 1] + 1);
        }
    }

    total = candies.reduce((accumulator, currentVal) => accumulator + currentVal, 0);
    return total;
};
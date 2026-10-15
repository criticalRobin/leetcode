function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    const res: boolean[] = [];
    let maxLeft: number = 0;
    let maxRight: number = 0;

    for (const num of candies) {
        maxRight = Math.max(maxRight, num);
    }


    for (let i: number = 0; i < candies.length; i++) {
        const current: number = candies[i] + extraCandies;
        const left: number = candies[i - 1] !== undefined ? candies[i - 1] : 0;
        maxLeft = Math.max(maxLeft, left);

        if (maxLeft <= current && maxRight <= current) res.push(true);
        else res.push(false)
    }

    return res;
};
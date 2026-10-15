function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    const res: boolean[] = [];
    let maxCandies: number = 0;

    for (const num of candies) maxCandies = Math.max(maxCandies, num);

    for (let i: number = 0; i < candies.length; i++) {
        const currentCandies: number = candies[i] + extraCandies;

        if (maxCandies <= currentCandies) res.push(true);
        else res.push(false)
    }

    return res;
};
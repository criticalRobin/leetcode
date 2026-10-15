function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    const res: boolean[] = [];
    let maxCandies: number = 0;

    for (const num of candies) maxCandies = Math.max(maxCandies, num);

    for (let i: number = 0; i < candies.length; i++) {
        if (maxCandies <= candies[i] + extraCandies) res.push(true);
        else res.push(false)
    }

    return res;
};
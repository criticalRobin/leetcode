function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    const res: boolean[] = [];
    const maxCandies: number = Math.max(...candies);

    for (let i: number = 0; i < candies.length; i++) {
        if (maxCandies <= candies[i] + extraCandies) res.push(true);
        else res.push(false)
    }

    return res;
};
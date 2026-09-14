function longestConsecutive(nums: number[]): number {
    if (nums.length === 0) return 0;
    
    let longest: number = 0;
    let counter: number = 1;

    nums.sort((a, b) => a - b);

    const set: Set<number> = new Set(nums);

    nums = [...set];
    
    if (nums.length === 1) return 1;

    for (let i: number = 1; i < nums.length; i++) {
        const current: number = nums[i];
        const last: number = nums[i - 1];

        if (last + 1 === current) {
            console.log(`adding up`)
            counter++;
        } else {
            counter = 1;
        }

        longest = Math.max(longest, counter);
    }

    return longest;
};
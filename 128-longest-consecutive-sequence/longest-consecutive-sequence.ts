function longestConsecutive(nums: number[]): number {
    const set: Set<number> = new Set(nums);
    let longest: number = 0;

    for (const num of set) {
        if (!set.has(num - 1)) {
            let length: number = 1;
            let current: number = num;

            while (set.has(current + 1)) {
                current++;
                length++;
            }

            longest = Math.max(longest, length);
        }
    }

    return longest;
};
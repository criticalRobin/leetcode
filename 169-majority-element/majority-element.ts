function majorityElement(nums: number[]): number {
    if (nums.length === 1) return nums[0];

    let ans: number = 0;
    const numsMap: Map<number, number> = new Map();
    
    for (const num of nums) {
        numsMap.set(num, (numsMap.get(num) + 1 | 0));
        if (numsMap.get(num)! > (numsMap.get(ans) | 0)) ans = num;
    }

    return ans;
};
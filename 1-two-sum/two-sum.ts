function twoSum(nums: number[], target: number): number[] {
    const numsMap = new Map();
    const res = [];

    for (let i = 0; i < nums.length; i++) {
        numsMap.set(nums[i], i)
    }

    for (let j = 0; j < nums.length; j++) {
        const diference = target - nums[j];

        if (j === numsMap.get(diference)) continue;

        if (numsMap.has(diference)) {
            res.push(j);
            res.push(numsMap.get(diference));
            return res;
        }
    }
};
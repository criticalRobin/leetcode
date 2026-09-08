function containsNearbyDuplicate(nums: number[], k: number): boolean {
    let hasSeen: Map<number, number> = new Map();

    for (let i: number = 0; i < nums.length; i++) {
        if (hasSeen.has(nums[i]) && Math.abs(hasSeen.get(nums[i])! - i) <= k) {
            return true;
        }
        
        hasSeen.set(nums[i], i);
    }

    return false;
};
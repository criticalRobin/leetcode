function canJump(nums: number[]): boolean {
    let farthest: number = 0;

    for (let i: number = 0; i < nums.length - 1; i++) {
        if (farthest >= i) {
            farthest = Math.max(farthest, i + nums[i]);
        } else {
            return false;
        }
    }

    return farthest >= nums.length - 1;
}
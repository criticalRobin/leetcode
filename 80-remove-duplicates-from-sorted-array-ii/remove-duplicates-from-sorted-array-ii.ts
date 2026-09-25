function removeDuplicates(nums: number[]): number {
    let k: number = 1;

    for (let i: number = 1; i < nums.length; i++) {
        if (nums[i] !== nums[k - 2]) {
            nums[k] = nums[i];
            k += 1;
        }
    }

    return k;
}
function removeDuplicates(nums: number[]): number {
    let k: number = 1;

    for (let i: number = 0; i < nums.length; i++) {
        if (nums[i] !== nums[k - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
};
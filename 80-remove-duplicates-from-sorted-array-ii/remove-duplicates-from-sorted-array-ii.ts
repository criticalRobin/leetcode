function removeDuplicates(nums: number[]): number {
    let k: number = 0; // ancle for the last item ive placed

    for (let i: number = 0; i < nums.length; i++) {
        if (k < 2 || nums[i] !== nums[k - 2]) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
}
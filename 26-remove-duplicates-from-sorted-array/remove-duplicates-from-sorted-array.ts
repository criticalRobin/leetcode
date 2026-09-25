function removeDuplicates(nums: number[]): number {
    let k: number = 0; // insert on k + 1

    for (let i: number = 1; i < nums.length; i++) {
        if (nums[i] !== nums[k]) {
            console.log(`i: ${nums[i]} - k: ${nums[k]}`);
            nums[k + 1] = nums[i];
            k++;
        }
    }
    console.log(`k: ${k}`);
    return k + 1;
};
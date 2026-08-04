function removeElement(nums: number[], val: number): number {
    let p1: number = 0;
    let p2: number = nums.length - 1;
    let k: number = 0;

    if (p2 < 0) return k = 0;

    if (p2 == 0 && nums[p2] == val) return k = 0;

    if (p2 == 0 && nums[p2] != val) return k = 1;

    if (p2 == 1 && (nums[p2] == val && nums[p1] == val)) return k = 0;

    while (p1 <= p2) {
        if (nums[p2] == val) k++;

        if (nums[p2] != val && nums[p1] == val) {
            nums[p1] = nums[p2];
            nums[p2] = val;
            p1++;
            k++;
        }

        if (nums[p1] != val && nums[p2] != val) {
            p1++;
        } else {
            p2--;
        }
    }

    k = nums.length - k;

    return k;
};
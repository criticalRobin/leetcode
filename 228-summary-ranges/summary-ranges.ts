function summaryRanges(nums: number[]): string[] {
    const result: string[] = [];
    let start = 0;

    for (let i = 1; i <= nums.length; i++) {
        if (i === nums.length || nums[i] !== nums[i - 1] + 1) {
            if (start === i - 1) {
                result.push(`${nums[start]}`);
            } else {
                result.push(`${nums[start]}->${nums[i - 1]}`);
            }
            start = i;
        }
    }

    return result;
}
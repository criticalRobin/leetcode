function jump(nums: number[]): number {
    let currentEnd: number = 0;
    let farthest: number = 0;
    let jumps: number = 0;
    let end: number = nums.length - 1;

    for (let i: number = 0; i < end; i++) {
        farthest = Math.max(farthest, i + nums[i]);

        if (i === currentEnd) {
            jumps++;
            currentEnd = farthest;
        }
    }

    return jumps;
};